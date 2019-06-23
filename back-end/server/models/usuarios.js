module.exports = (sequelize,DataTypes) =>{
    const usuarios = sequelize.define('usuarios', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },        
        usuario: DataTypes.STRING,
        password: DataTypes.STRING,
        id_rol: DataTypes.INTEGER,
        activo: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        usuario_creacion: DataTypes.STRING,
    });
    return usuarios;
}

