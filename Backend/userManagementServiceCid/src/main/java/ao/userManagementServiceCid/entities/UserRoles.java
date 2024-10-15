package ao.userManagementServiceCid.entities;


import ao.userManagementServiceCid.enums.UserRole;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

import java.util.UUID;


public class UserRoles {

    private UUID fk_user;
    private UserRole userRoles;

}
