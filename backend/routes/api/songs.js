const express = require("express");
const asyncHandler = require("express-async-handler");
const { Songs } = require("./../../db/models");

const router = express.Router();

router.get(
	"/",
	asyncHandler(async (req, res) => {
		const songs = await Songs.findAll();

		res.json(songs);
	})
);

module.exports = router;
