// const bronzeImg = 'https://valorant.fandom.com/wiki/Competitive?file=Bronze_1_Rank.png'
// const silverImg = 'https://static.wikia.nocookie.net/valorant/images/8/8a/Silver_1_Rank.png/revision/latest?cb=20200623203408'
const goldImg = 'https://svgstack.com/media/img/valorant-gold-2-icon-NCnB155246.webp'
const userImg = 'https://c0.wallpaperflare.com/preview/1/24/952/little-girl-wildflowers-meadow-child-thumbnail.jpg'
const valoAgent1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEcftkF7Ap1WJVg2qtOViCQ1iYqefy8Xc5ugFxaBIlX76dRw6uzT-H0OM&s=10'
const valoAgent2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmHyGObtMRTVa0tjOCz0jfMheUOIhdDwuwE0bhrVkRkl8w41v2VwJxo6-&s=10'
const valoAgent3 = 'https://plarium.com/wp-content/uploads/2025/05/valorant-characters-hero-png.webp'
const valoTeam1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU8-liO05_CXe_A9m-PUzGaPd9QwtD1fod_Vk4Q9CGn_bRpu9nZjYKn3A&s=10'
const valoTeam2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOeRg9ejM0BJ9dRusdcoiaEqR_m5mb5hPNVIrScyowha0rX0-v_-f5H7cY&s=10'

const ValoRankCard = () => {
    return (
        <div className="bg-white border-2 border-gray-300 rounded-3xl flex flex-col md:flex-row md:justify-center items-center p-2 shadow-2xl">
            <img src={userImg} className="w-full h-32 md:w-40 md:h-60 object-cover rounded-3xl" alt="user image" />
            
            <div className="px-5 mt-2 md:mt-0">
                <h2 className="font-black text-center text-red-700">PLAYER CARD</h2>
                <hr className="border-red-500 my-2" />
                <div className="flex flex-col">
                    <p>Username: <span className="font-bold italic text-[#7302b4]">PloyIIV</span></p>
                    <div>
                        
                        <p>Rank: <span className="font-bold italic text-[#7302b4]">Gold <img className="w-5 h-5 hidden md:inline-block" src={goldImg} alt="gold rank" /></span></p>
                    </div>
                    <p>Favorite Agent:
                        <div className="flex gap-2">
                            <img className="w-14 h-14 object-cover rounded-3xl" src={valoAgent1} alt="valorant agent" />
                            <img className="w-14 h-14 object-cover rounded-3xl" src={valoAgent2} alt="valorant agent" />
                            <img className="w-14 h-14 object-cover rounded-3xl" src={valoAgent3} alt="valorant agent" />
                        </div>
                    </p>
                    <p>Favorite Team: 
                        <div className="flex gap-2">
                            <img className="w-14 h-14 object-cover rounded-3xl" src={valoTeam1} alt="valorant agent" />
                            <img className="w-14 h-14 object-cover rounded-3xl" src={valoTeam2} alt="valorant agent" />
                        </div>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ValoRankCard