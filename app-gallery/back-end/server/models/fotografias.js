module.exports = (sequelize,DataTypes) =>{
    const fotografias = sequelize.define('fotografias', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },        
        fotografia: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        imagen: DataTypes.STRING,
        numero: DataTypes.INTEGER,
        autor: DataTypes.STRING,
        activo: DataTypes.BOOLEAN,
        usuario_creacion: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
        
    });
    return fotografias;
}
