package ao.userManagementServiceCid.repositories;

import ao.userManagementServiceCid.entities.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Faculty, Integer> {
}
