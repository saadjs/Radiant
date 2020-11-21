"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Songs extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	Songs.init(
		{
			songName: DataTypes.STRING,
			photo: DataTypes.STRING,
			artist: DataTypes.STRING,
			mp3: DataTypes.STRING,
			art: DataTypes.ARRAY(DataTypes.STRING),
			isPlaying: DataTypes.BOOLEAN
		},
		{
			sequelize,
			modelName: "Songs"
		}
	);
	return Songs;
};
