"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		/**
		 * Add seed commands here.
		 *
		 * Example:
		 */
		await queryInterface.bulkInsert(
			"Songs",
			[
				{
					songName: "Sundew",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
					artist: "Delayde, Webmoms",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7967",
					art: ["#2E254B", "#71A183"],
					isPlaying: true,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Little Spirit",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
					artist: "Delayde",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8547",
					art: ["#F9F9F9", "#4C3B6A"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Calm",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/06/d9d8ae69141cb7838e3c53bbf393c6218285e384-1024x1024.jpg",
					artist: "ØDYSSEE, Florent Garcia",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9285",
					art: ["#FEC9BE", "#05004D"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Warm Feeling",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/06/faa452681fe33146c42a1b422fdf7cd7fd082637-1024x1024.jpg",
					artist: "xander.",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9052",
					art: ["#693F3C", "#B58977"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "fiveyearsago",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/05/861564cb8a53229de4e63541a44f507c8b0da6ec-1024x1024.jpg",
					artist: "Psalm Trees",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9021",
					art: ["#1E2019", "#EA4729"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Flushing the Stairs",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",
					artist: "Leavv",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9917",
					art: ["#4A6B56", "#5B463E"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Hotel Lobby Birthday Party",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
					artist: "Aviino, Oliv",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10452",
					art: ["#0E3769", "#AA78B7"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Pine and Oak",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
					artist: "Philanthrope, The Field Tapes",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10251",
					art: ["#975B4E", "#FFFFFF"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "burn my mind",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
					artist: "Tesk",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8137",
					art: ["#07080E", "#C3F0EB"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Never Ending",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
					artist: "Sitting Duck, squeeda",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9652",
					art: ["#664232", "#63382B"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Paraglider",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/4fac6bb3a32f9e76b465990ba8d97d7db8a372f5-1024x1024.jpg",
					artist: "Kendall Miles, H E R B",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9318",
					art: ["#D8724F", "#0F0D0B"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Vinho Verde",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/ae91385fc2d92e40dd4bf337867dee16fb5648d2-1024x1024.jpg",
					artist: "Clap Cotton",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9447",
					art: ["#D0EB84", "#ADF1E1"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Need Someone",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/edaf1202cf33c7a2a122b7494a7e4d3e643af45f-1024x1024.jpg",
					artist: "Miscél",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9305",
					art: ["#AA476D", "#E58CB9"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Hibiscus",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/858b533ba20ff95bf5b401089b195d1a8cb43870-1024x1024.jpg",
					artist: "G Mills, Felty",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8971",
					art: ["#1E2F55", "#1871B0"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Cozy Fire",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/05/260a909fca701bbb7593f5f8f9cff9508cca2856-1024x1024.jpg",
					artist: "xander.",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7955",
					art: ["#CE354A", "#887C9D"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Du Bassin au Muret",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/05/299ed90790252c3b19e0b5ca350d1cf3a9c30436-1024x1024.jpg",
					artist: "sadtoi",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8810",
					art: ["#BF7448", "#BC7248"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Flashes of Calm",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/04/6acdccd13d84220cc009a3f5073a1a41550c17cb-1024x1024.jpg",
					artist: "mommy, Delayde",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8030",
					art: ["#2D0140", "#C97DDD"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "London Love Letters",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/08/7ba352cafecae63aa3f09a52e125ea615d2c1f9b-1024x1024.jpg",
					artist: "Aviino",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7914",
					art: ["#BFA250", "#E9F8FF"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Aries",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/04/35317644d6db24c3ca144619d03f2805fa702472-1024x1024.jpg",
					artist: "SwuM",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8008",
					art: ["#9E7667", "#758B7E"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Cruisin'",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/8404541e3b694d16fd79433b142ed910f36764dd-1024x1024.jpg",
					artist: "Cloudchord, G Mills",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8200",
					art: ["#044247", "#011A22"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "doing laundry",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/b5032cec4d341a4f7565e3c0fef5d7a6efeadc89-1024x1024.jpg",
					artist: "weird inside",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8134",
					art: ["#0C1382", "#84D1E3"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Ocean Patio",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/04/35a95878437b99e3384b023504b89403ae169707-1024x1024.jpg",
					artist: "Philanthrope, Dayle",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8036",
					art: ["#41110C", "#45585E"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Morning In The Cafe",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/9ba130514bcb5697e8a9be6a93fa2c8fc88223d0-1024x1024.jpg",
					artist: "No Spirit",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8068",
					art: ["#CAB1B5", "#4A2027"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Like I Am",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/50758f405d2aba9cd6e8c4e6cfce44e4d9893714-1024x1024.jpg",
					artist: "Ian Ewing",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7964",
					art: ["#2B2640", "#CF3571"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "223°",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/0b2270e2865d7c9fb7ce840263bc6fb93f64f812-1024x1024.jpg",
					artist: "Mr. Käfer, Makkako",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8910",
					art: ["#6D8CBB", "#C15D6F"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 */
		await queryInterface.bulkDelete("Songs", null, {});
	}
};
