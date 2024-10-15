package ao.userManagementServiceCid.enums;

import javax.swing.*;

public enum Role {

    ADMIN("Administrator"),
    EDITOR("Editor"),
    REVISOR("Revisor"),
    USER("Usuario"),
    DEPOSITANTE("Depositante");

    private String descricao;
    Role(String descricao) {
        this.descricao = descricao;
    }
    public String getDescricao() {
        return descricao;
    }
}
