package ao.userManagementServiceCid.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/welcome")
public class WelcomeCid {

    @GetMapping
    public String welcome(){
        return "Welcome CID";
    }
}
