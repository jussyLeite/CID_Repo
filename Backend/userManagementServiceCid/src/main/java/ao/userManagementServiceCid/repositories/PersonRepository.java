package ao.userManagementServiceCid.repositories;

import ao.userManagementServiceCid.entities.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {
}
