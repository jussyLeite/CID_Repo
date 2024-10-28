//package ao.userManagementServiceCid.repositories.implementation;

/*import com.gasfinder.user_management_service.entities.User;
import com.gasfinder.user_management_service.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MyUserDetailsService implements UserDetailsService  {

    @Autowired
    private UserRepository userRepository;


    public boolean isActiveUser(String email){

        Optional<User> user = userRepository.findByEmailAndIsActiveTrue(email);
        return user.isPresent();
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Optional<User> user = userRepository.findByEmail(email);

        if(user.isPresent()){
            var userObj = user.get();
            return org.springframework.security.core.userdetails.User.builder()
                    .username(userObj.getEmail())
                    .password(userObj.getPassword())
                    .roles(getRoles(userObj))
                    .build();
        } else {
            throw new UsernameNotFoundException(email);
        }
    }

     private String[] getRoles(User user)
    {
        if (user.getRole() == null){
            return new String[]{"USER"};
        }
        return user.getRole().getValue().split(",");
    }
}
   */