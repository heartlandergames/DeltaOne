#pragma strict

import UnityEngine.Networking;

public class Player_Network extends NetworkBehaviour{

   
    var FPSCamera : Camera;
    
    var audioListener : AudioListener;

    var fpc : UnityStandardAssets.Characters.FirstPerson.FirstPersonController;

function Start () {
    if(isLocalPlayer)
    {
        GameObject.Find("Scene Camera").SetActive(false);
        GetComponent(CharacterController).enabled = true;
        fpc.enabled = true;
        FPSCamera.enabled = true;
        audioListener.enabled = true;
}
}

function Update () {

}
}