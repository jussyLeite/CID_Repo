package ao.userManagementServiceCid.repositories;

import ao.userManagementServiceCid.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepositories extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
    //List<User> findAll();
}
