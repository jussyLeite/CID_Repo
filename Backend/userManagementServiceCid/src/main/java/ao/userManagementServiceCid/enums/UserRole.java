package ao.userManagementServiceCid.enums;

public enum UserRole {

    ADMIN("Administrator"),
    EDITOR("Editor"),
    REVISOR("Revisor");

    private String descricao;
    UserRole(String descricao) {
        this.descricao = descricao;
    }
    public String getDescricao() {
        return descricao;
    }
}
