"use strict";
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("Songs", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			songName: {
				type: Sequelize.STRING
			},
			photo: {
				type: Sequelize.STRING
			},
			artist: {
				type: Sequelize.STRING
			},
			mp3: {
				type: Sequelize.STRING
			},
			art: {
				type: Sequelize.ARRAY(Sequelize.STRING)
			},
			isPlaying: {
				type: Sequelize.BOOLEAN
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("Songs");
	}
};
