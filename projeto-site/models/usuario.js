'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		idUsuario: {
			field: 'ID_Usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		nome: {
			field: 'Nome_Usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		idade: {
			field: 'Idade',
			type: DataTypes.INTEGER,
			allowNull: false
		},
		email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		instrumento: {
			field: 'Instrumento',
			type: DataTypes.STRING,
			allowNull: false
		}, 
		senha: {
			field: 'Senha',
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		tableName: 'Usuario', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Usuario;
};
