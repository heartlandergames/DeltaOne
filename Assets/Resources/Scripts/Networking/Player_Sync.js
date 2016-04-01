#pragma strict
import UnityEngine.Networking;



public class Player_Sync extends NetworkBehaviour{

    @SyncVar
    private var syncPos : Vector3;

    @SyncVar
    private var syncRot : Quaternion;

    var myTransform : Transform;
    var lerpRate : float = 15;


    

    function FixedUpdate () {
        TransmitTransform();
        LerpTransform();
    }

    function LerpTransform()
    {
        if(!isLocalPlayer)
        {
            myTransform.position = Vector3.Lerp(myTransform.position, syncPos, Time.deltaTime * lerpRate);
            myTransform.rotation = Quaternion.Lerp(myTransform.rotation, syncRot, Time.deltaTime * lerpRate);
        }
    }


    @Command
    function CmdProvideTransform(pos : Vector3, rot : Quaternion)
        {
            syncPos = pos;
            syncRot = rot;
        }

    @ClientCallback
    function TransmitTransform()
    {
        if(isLocalPlayer)
        {
            CmdProvideTransform(transform.position, transform.rotation);
        }
    }
}
