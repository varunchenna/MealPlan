package com.stackroute.registration.service;

import com.stackroute.registration.model.User;
import com.stackroute.registration.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repo;

    public User saveUser(User user){
        return repo.save(user);
    }

    public User fetchUserByEmailId(String email){
        return repo.findByEmailId(email);
    }

    public User fetchUserByEmailIdAndPassword(String email, String password){
        return  repo.findByEmailIdAndPassword(email, password);
    }
    public Object getCurrentId(String emailId){
        User user1=repo.findByEmailId(emailId);
        return user1.getId();
    }
}
