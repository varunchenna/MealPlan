package com.stackroute.registration.controller;

import com.stackroute.registration.model.User;
import com.stackroute.registration.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
public class RegistrationController {


    @Autowired
    private RegistrationService service;

    @PostMapping("/registeruser")
    @CrossOrigin(origins = "http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception{
        String tempEmailId = user.getEmailId();
        if(tempEmailId != null && !"".equals(tempEmailId)){
            User userObj =service.fetchUserByEmailId(tempEmailId);
            if(userObj != null){
                throw new Exception("user with "+ tempEmailId+"is already exists");
            }
        }
        User userObj = null;
        userObj = service.saveUser(user);
        return userObj;
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {
        String tempEmailId= user.getEmailId();
        String tempPass = user.getPassword();
        User userObj = null;
        if(tempEmailId != null && tempPass != null){
            userObj=service.fetchUserByEmailIdAndPassword(tempEmailId,tempPass);
        }
        if(userObj == null){
            throw new Exception("Bad credentials");
        }
        return userObj;
    }
    @GetMapping("/get-current-id/{emailId}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<?> getCurrentId(@PathVariable String emailId){
        System.out.println("Spring Boot getCurrentId");
        return ResponseEntity.ok(service.getCurrentId(emailId));
    }
}
