"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Songs",
			[
				{
					songName: "Snowstalgia",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
					artist: "invention_",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10305",
					art: ["#1F487C", "#275564"],
					isPlaying: true,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Going Back",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
					artist: "Swørn",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10310",
					art: ["#314F5A", "#575465"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Paved Paths",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
					artist: "Leavv",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9919",
					art: ["#2D6A63", "#DE9A66"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Bliss",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/5bff1a6f1bd0e2168d29b4c841b811598135e457-1024x1024.jpg",
					artist: "Misha, Jussi Halme",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9248",
					art: ["#2A4878", "#E0828D"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Sleepover",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",
					artist: "Nymano, JK the Sage",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10130",
					art: ["#5E508E", "#926A92"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Rest Until Dark",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
					artist: "Sleepy Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10015",
					art: ["#1C6180", "#CEDDDC"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Colors Fade",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/09/686808356b2bbc6a368e372ea604150bc346c788-1024x1024.jpg",
					artist: "Sleepy Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10023",
					art: ["#4090A7", "#E3CBAC"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Imagination",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/24bd0da848d9718fd19af104ff5c0b11f914cb25-1024x1024.jpg",
					artist: "Montell Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9646",
					art: ["#C35173", "#F1C6B6"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "ny90",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/e1706dc2363d3911644abfda0e692303f1196127-1024x1024.jpg",
					artist: "Ezzy",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9730",
					art: ["#B15E66", "#569576"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Yesterday",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/b6e48e6cfb2a90723b9cf1b108a6d305f9204eb4-1024x1024.jpg",
					artist: "Mo Anando",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9281",
					art: ["#67CBC3", "#C47E7C"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Persist",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/05/16bcbe48680098798af04f176daae3693839238d-1024x1024.jpg",
					artist: "invention_",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8291",
					art: ["#45598E", "#F598AD"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Let's Stay Inside",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/04/478079cd16fca3ef62a4667dff1673e96e2b635f-1024x1024.jpg",
					artist: "No Spirit",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9428",
					art: ["#467D60", "#C75043"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "After Dark",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/be9e5dca9d4c9015c407a2d2590af8a0e5e278ce-1024x1024.jpg",
					artist: "Sugi.wa",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8105",
					art: ["#078E7F", "#C7FFD8"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Far From Home",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/ad7fc4dda66ba986466fd2b1c416b0b12411ee28-1024x1024.jpg",
					artist: "Toonorth",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8127",
					art: ["#4D6D68", "#A0C497"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Nights Like These",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/25a182a6a21588b8f7ad5605ba1118a8ea61bdc2-1024x1024.jpg",
					artist: "Sleepy Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7968",
					art: ["#045275", "#68C1D8"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Tsuki's Tears",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/24d75baebd16d287703d481b4cc77f6c0b5159c7-1024x1024.jpg",
					artist: "Ward Wills",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9014",
					art: ["#0C3C6D", "#DF7D82"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Mother Nature",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/58028b4ad62050072228e4c833916e5512772399-1024x1024.jpg",
					artist: "Blue Wednesday, Yasper",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9045",
					art: ["#342F49", "#E79AAF"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "My Love For Her",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/7c34f98dc16fd387b1d9c89618eaef13201f307e-1024x1024.jpg",
					artist: "xander., Wesley Curtis",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9035",
					art: ["#523A22", "#D19D6B"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Never Felt The Same",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/05/be399329e137d6d507393565bacd8e9193c44b07-1024x1024.jpg",
					artist: "Sleepy Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7810",
					art: ["#301331", "#B55C62"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Velocities",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/9e04907d0cf68c974c4a5f530b082a8d83a2d41f-1024x1024.jpg",
					artist: "Sleepy Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7988",
					art: ["#1E3C5B", "#92D1E2"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Sofa Stories",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/4b9345777ac06217801ed6b44c66800829e122c3-1024x1024.jpg",
					artist: "Moods, Yasper",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=10001",
					art: ["#A55178", "#9DC694"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Clouds",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/00c8a4345165a8caf49d821209e29d89296f6d6a-1024x1024.jpg",
					artist: "Miscél, Hanz",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8062",
					art: ["#00244B", "#D82526"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Tiny Sailboat",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/888ce90dd44b73f819413e20d744bc00e6f9adac-1024x1024.jpg",
					artist: "Kupla",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7937",
					art: ["#3B1699", "#AF47A3"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Space Cadet",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
					artist: "Philanthrope, Sleepy Fish",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8841",
					art: ["#FF3B08", "#FED39E"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Private Island",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/191be46f1195142eced38bab71f0cc0284a669e4-1024x1024.jpg",
					artist: "Strehlow",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8411",
					art: ["#982C36", "#F3A2A9"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "6Th Station",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/b8792fcb926a79c2410b9bcd32837e206d474e32-1024x1024.jpg",
					artist: "cocabona",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7858",
					art: ["#1929EA", "#F282FE"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Be Alright",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/b2e2c1fca3e00a74402969e0a9e98d4849f38aef-1024x1024.jpg",
					artist: "weird inside",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8904",
					art: ["#72494F", "#718363"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Hummus and Bread",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/f5170130ca62e18fb3928feb3d851f3f07f77e18-1024x1024.jpg",
					artist: "Yasper, Louk",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7879",
					art: ["#D74E2C", "#E2D5A1"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "The Finish Line",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/1b7f6e07967bf16feaa5628d843466d01a2141fe-1024x1024.jpg",
					artist: "Middle School, Mitchel Forman",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7902",
					art: ["#EF9C1A", "#456282"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "From The Top",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/4121d71e217164f60b35ab897bd2a171f97dadd9-1024x1024.jpg",
					artist: "L'Indécis, Blue Wednesday",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8107",
					art: ["#182986", "#E55149"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Stagnant",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/b162505d856f1b7326401a00d716f48be4529ed7-1024x1024.jpg",
					artist: "Supertask",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=9471",
					art: ["#5E3B2E", "#E1B1A0"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Sundew",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
					artist: "Delayde, Webmoms",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=7967",
					art: ["#403A92", "#EE8BD4"],
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
					art: ["#14277F", "#FEC8BD"],
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
					art: ["#693F3C", "#AB7174"],
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
					art: ["#1E2019", "#C62C2A"],
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
					art: ["#4A6B56", "#CAD28B"],
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
					art: ["#285AA1", "#B066B2"],
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
					art: ["#975B4E", "#43482D"],
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
					art: ["#6F69BB", "#A3DAED"],
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
					art: ["#664232", "#6BCABC"],
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
					art: ["#D8724F", "#824544"],
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
					art: ["#465843", "#9EEEE1"],
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
					art: ["#AA476D", "#F1C6E2"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					songName: "Little Spirit",
					photo:
						"https://chillhop.com/wp-content/uploads/2020/07/6263175f6334ac348613790b863794010f2a9524-1024x1024.jpg",
					artist: "Delayde",
					mp3: "https://mp3.chillhop.com/serve.php/?mp3=8547",
					art: ["#4E2D7A", "#ECA4DE"],
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
					art: ["#1E2F55", "#EABD44"],
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
					art: ["#CE354A", "#596FB1"],
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
					art: ["#BF7448", "#EECFB4"],
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
					art: ["#2D0140", "#62C8F8"],
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
					art: ["#BFA250", "#C0CD4E"],
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
					art: ["#49594A", "#D28A51"],
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
					art: ["#FC194A", "#41B3B3"],
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
					art: ["#0C1382", "#3E8E84"],
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
					art: ["#713224", "#E24528"],
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
					art: ["#8C5A63", "#ECD3D7"],
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
					art: ["#DE3868", "#663664"],
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
					art: ["#6D8CBB", "#D87689"],
					isPlaying: false,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Songs", null, {});
	}
};
