package ao.userManagementServiceCid.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/cid/authentication")
public class AuthenticationController {


    public ResponseEntity<?> createAccount(){
        return null;
    }

    public String login(){
        return " ";
    }
}
