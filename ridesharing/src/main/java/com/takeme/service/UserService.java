package com.takeme.service;

import com.takeme.model.User;
import com.takeme.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {
        return repo.save(user);
    }
    public Optional<User> findByEmail(String email) {
        return repo.findByEmail(email);
    }

    public Optional<User> login(String email, String password, String role) {
        Optional<User> userOpt = repo.findByEmail(email);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        
        User user = userOpt.get();
        if (!user.getPassword().equals(password)) {
            throw new RuntimeException("Invalid password");
        }
        
        if (!user.getRole().equals(role)) {
            throw new RuntimeException("Invalid role for user");
        }
        
        return Optional.of(user);
    }
}