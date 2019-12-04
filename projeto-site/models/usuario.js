'use strict';

/* 
lista e explicação dos Datatypes:
https://codewithhugo.com/sequelize-data-types-a-practical-guide/
*/

module.exports = (sequelize, DataTypes) => {
    let Usuario = sequelize.define('Usuario',{
		ID_Usuario: {
			field: 'ID_Usuario',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},		
		Nome_Usuario: {
			field: 'Nome_Usuario',
			type: DataTypes.STRING,
			allowNull: false
		},
		Idade: {
			field: 'Idade',
			type: DataTypes.STRING,
			allowNull: false
		},
		Email: {
			field: 'Email',
			type: DataTypes.STRING,
			allowNull: false
		},
		Instrumento: {
			field: 'Instrumento',
			type: DataTypes.STRING,
			allowNull: false
		}, 
		Senha: {
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
