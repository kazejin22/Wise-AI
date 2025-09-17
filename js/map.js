const asiaCases = [
    {
        id: 1,
        title: "Deepfake of Finance Minister Sri Mulyani",
        description: "A deepfake video of Finance Minister Sri Mulyani was uploaded on Instagram on August 17, 2025, showing her saying 'teachers are a burden on the state'. The video was created using Google Veo AI technology and was viewed 57,000 times, liked by 810 accounts, and shared 391 times within two days.",
        location: "Jakarta, Indonesia",
        coordinates: [-6.2088, 106.8456],
        category: "politics",
        date: "August 2025",
        details: [
            "Video created using Google Veo AI with visible watermark in bottom right corner.",
            "Detected by Mafindo using Google SynthID Detector which identified AI-generated content.",
            "Video duration was 16 seconds, repeated twice, typical of Veo 3 characteristics.",
            "Spread rapidly on social media with significant engagement before being debunked."
        ],
        impact: "Highlighted Indonesia's low digital literacy and vulnerability to AI manipulation. Demonstrated the ease of creating convincing deepfakes using readily available AI tools like Google Veo 3, raising concerns about future disinformation campaigns targeting public figures.",
        sources: [
            { name: "CNN Indonesia", url: "https://kbr.id/articles/ragam/sri-mulyani-korban-deepfake-bagaimana-deteksi-dan-antisipasi-video-palsu-" },
            { name: "DetikFinance", url: "https://finance.detik.com/berita-ekonomi-bisnis/d-8069431/sri-mulyani-bantah-sebut-guru-beban-negara-ungkit-video-deepfake" },
            { name: "Kompas", url: "https://www.kompas.com/tren/read/2025/08/20/134500065/video-sri-mulyani-yang-sebut-gaji-guru-beban-negara-ternyata-deepfake-apa?page=all" }
        ],
        videoUrl: "assets/video/0912.mp4"
    },
    {
        id: 2,
        title: "Fake News Deepfake in India",
        description: "Scammers created deepfake videos of India Today anchor Rahul Kanwal and Elon Musk to promote fraudulent investment schemes, claiming PM Modi uses a financial program created by Musk that yields Rs 8 lakh per week from a Rs 21,000 investment.",
        location: "Mumbai, India",
        coordinates: [19.0760, 72.8777],
        category: "hoax",
        date: "January 2024",
        details: [
            "Deepfake used footage from India Today's 'Operation Digital Arrest' investigation aired October 28.",
            "Rahul Kanwal's voice was poorly replicated, making the fake obvious to careful viewers.",
            "Elon Musk footage was taken from his June 2023 meeting with PM Modi in New York.",
            "Video viewed almost 500,000 times before being identified as fraudulent."
        ],
        impact: "Demonstrated how deepfakes are increasingly used for get-rich-quick investment scams. Many viewers in comments identified it as fake, showing growing public awareness, but the high view count indicates continued vulnerability to such schemes.",
        sources: [
            { name: "India Today", url: "https://www.indiatoday.in/fact-check/story/fact-check-deepfake-india-today-anchor-rahul-kanwal-elon-musk-fraudulent-scheme-2643752-2024-12-02" }
        ],
        videoUrl: ""
    },
    {
        id: 3,
        title: "Election Disinformation in Pakistan",
        description: "During Pakistan's 2024 general election, PTI workers used deepfake technology to generate speeches of jailed former PM Imran Khan for virtual rallies, portraying him as a fighter and saviour while claiming he was jailed in fabricated cases.",
        location: "Islamabad, Pakistan",
        coordinates: [33.7294, 73.0931],
        category: "politics",
        date: "February 2024",
        details: [
            "AI-generated speeches used for virtual rallies during election campaign.",
            "Created to circumvent restrictions on Imran Khan's physical appearances.",
            "Portrayed Khan as a political martyr and fighter against injustice.",
            "Used to mobilize PTI supporters despite Khan's imprisonment."
        ],
        impact: "Raised concerns about AI manipulation in democratic processes and the potential for deepfakes to circumvent legal restrictions on political campaigning.",
        sources: [
            { name: "DFRLab", url: "https://dfrlab.org/2024/02/07/pakistan-election-deepfakes/" }
        ],
        videoUrl: ""
    },
    {
        id: 4,
        title: "Deepfake Prank in Japan",
        description: "Japanese celebrities like actor Adachi Rika and personality Iori Moe faced harassment from deepfake sexual images spread on social media. About 95,000 deepfake videos were released online, with 98% being sexual content targeting celebrities and ordinary people.",
        location: "Tokyo, Japan",
        coordinates: [35.6762, 139.6503],
        category: "hoax",
        date: "April 2024",
        details: [
            "Deepfake sexual images spread on social media.",
            "About 95,000 deepfake videos were released online, with 98% being sexual content targeting celebrities and ordinary people.",
            "Many viewers identified it as fake, showing growing public awareness, but the high view count indicates continued vulnerability to such schemes.",
        ],
        impact: "Demonstrated how deepfakes are increasingly used for harassment and prank calls. The high view count indicates continued vulnerability to such schemes.",
        sources: [
            { name: "NHK World", url: "https://www3.nhk.or.jp/nhkworld/en/news/backstories/3720/" }
        ],
        videoUrl: ""
    },
    {
        id: 5,
        title: "AI and Deepfake-Driven Cybercrime in Saudi Arabia",
        description: "Saudi Arabia has faced increasing threats from AI-generated cyber scams including deepfake voice cloning, hyper-realistic phishing, and video manipulation. These methods are used to impersonate executives, family members, and brands, targeting financial institutions and individuals.",
        location: "Riyadh, Saudi Arabia",
        coordinates: [21.5225, 39.1719],
        category: "financial",
        date: "2023-2025",
        details: [
            "Saudi Arabia invested SR13.3 billion (~$3.5 billion) since 2023 in cybersecurity infrastructure emphasizing AI-powered threat detection.",
            "National Cybersecurity Authority (NCA) launched Cybersecurity Toolkit and HASEEN portal integrating AI to fight cybercrime",
            "AI-enabled scams use deepfakes for Zoom call hijacks, voice cloning for social engineering, and phishing emails with hyper-realistic forgeries.",
            "The Kingdom's banking sector is mandated to implement real-time behavioral anomaly detection and biometric KYC controls to counter these threats.",
            "Collaboration within GCC and international agencies targets mule networks and synthetic fraud operations."
        ],
        impact: "Enhanced national cyber readiness and defenses against evolving AI threats and Increased public awareness campaigns on AI threats and safe digital behavior..",
        sources: [{ name: "Saudi Market Research Consulting", url: "https://saudimarketresearchconsulting.com/insights/articles/saudi-cybercrime-ai-response-with-3-5billion" },
                  { name: "Arab News", url: "https://www.arabnews.com/node/2602659/saudi-arabia" },
                  { name: "Global Compliance News", url: "https://www.globalcompliancenews.com/2024/07/04/https-insightplus-bakermckenzie-com-bm-technology-media-telecommunications_1-united-arab-emirates-deepfakes-and-the-use-of-artificial-intelligence-ai-legal-issues-and-considerations_06112024/" }
        ],
        videoUrl: ""
    },
    {
        id: 6,
        title: "AI Voice Cloning and Deepfake Investment Scams in Malaysia",
        description: "Fraudsters used AI to clone voices and create deepfake videos impersonating trusted individuals and public figures to scam victims out of money and personal data.",
        location: "Kuala Lumpur, Malaysia",
        coordinates: [3.1390, 101.6869],
        category: "financial",
        date: "July 2025",
        details: [
            "Voice cloning scams involved callers impersonating employers or family members via WhatsApp or phone calls, requesting urgent financial help or prepaid top-up PINs.",
            "Victims lost thousands of ringgit in multiple incidents across Selangor, Kuala Terengganu, Kuala Lumpur, and Penang.",
            "Malaysians reportedly lost RM2.11 billion in 13,956 scam cases related to these AI-driven frauds.",
            "Deepfake videos featured high-profile figures such as Prime Minister Datuk Seri Anwar Ibrahim, tycoon Tan Sri Robert Kuok, former Chief Justice Tun Tengku Maimun Tuan Mat, and Capital A CEO Tan Sri Tony Fernandes endorsing fake investments."
        ],
        impact: "The scams caused a significant loss of confidence in Malaysians and raised concerns about the safety and privacy of personal data. ",
        sources: [{ name: "Malay Mail", url: "https://www.malaymail.com/news/malaysia/2025/08/04/ai-scams-are-getting-real-here-are-the-cases-happening-in-malaysia-that-you-should-know-about/183459" }],
        videoUrl: ""
    },
    {
        id: 7,
        title: "Propaganda and Disinformation Using Deepfakes in the Ukraine Conflict",
        description: "Russian state-linked campaigns have reportedly used deepfakes and AI-generated content to spread propaganda, disinformation, and conspiracy theories aimed at discrediting Ukraine and Western allies.",
        location: "Russia",
        coordinates: [55.7558, 37.6173],
        category: "politics",
        date: "2021-2024",
        details: [
            "Campaigns impersonated reputable news outlets and government entities with fake sites and social media accounts.",
            "Use deepfake videos and texts to sow confusion and erode public trust.",
            "Involved in misinformation around military and political events including the Ukraine war and international affairs.",
            "The Kremlin's Doppelganger campaign extensively used AI tools for content creation and distribution."
        ],
        impact: "International sanctions imposed on Russian entities responsible for disinformation.",
        sources: [{ name: "NPR", url: "https://www.npr.org/2024/06/06/g-s1-2965/russia-propaganda-deepfakes-sham-websites-social-media-ukraine" }],
        videoUrl: ""
    },
    {
        id: 8,
        title: "Asia-Pacific: Surge in Deepfake Cases - Singapore",
        description: "Singapore reported a 240% rise in deepfake attacks in 2024, with political figures and ordinary citizens targeted. High-profile deepfake cases include videos of Singapore's Prime Minister Lee Hsien Loong and Deputy Prime Minister Lawrence Wong promoting fake investment schemes.",
        location: "Singapore",
        coordinates: [1.3521, 103.8198],
        category: "financial",
        date: "2022-2024",
        details: [
            "Singapore reported a 240% rise in deepfake attacks in 2024, with political figures and ordinary citizens targeted.",
            "High-profile deepfake cases include videos of Singapore's Prime Minister Lee Hsien Loong and Deputy Prime Minister Lawrence Wong promoting fake investment schemes.",
            "Scams exploiting deepfakes include impersonation of CEOs, politicians, and royalty to solicit money or spread disinformation.",
            "Cybercriminal networks lure thousands into organized fraud operations involving deepfake technology."
        ],
        impact: "Billions of dollars lost due to scams and fraud linked to deepfake technology in the region and Increased demand for legal frameworks, AI detection technology, and public awareness campaigns.",
        sources: [
            { name: "Global Initiative", url: "https://globalinitiative.net/analysis/deepfakes-ai-cyber-scam-south-east-asia-organized-crime/" },
            { name: "Channel News Asia", url: "https://www.channelnewsasia.com/singapore/deepfake-video-pm-lee-investment-scam-4012946" },
            { name: "Bernama", url: "https://www.bernama.com/en/thoughts/news.php?id=2460435" } ,
            { name: "NTU", url: "https://www.ntu.edu.sg/business/news-events/news/story-detail/singapore-registers-asia-pacific-biggest-spike-in-identity-fraud" },
        ],
        videoUrl: ""
    },
    {
        id: 9,
        title: "Asia-Pacific: Surge in Deepfake Cases - Vietnam",
        description: "Vietnam recorded the highest regional increase in deepfake fraud (over 25%) between 2022 and 2023, ranking as the second highest in the world after North America.",
        location: "Hanoi, Vietnam",
        coordinates: [21.0285, 105.8542],
        category: "financial",
        date: "2022-2024",
        details: [
            "Vietnam recorded the highest regional increase in deepfake fraud (over 25%).",
            "The Philippines saw the most rapid growth in case numbers (4500% increase).",
            "Singapore reported a 240% rise in deepfake attacks in 2024, with political figures and ordinary citizens targeted.",
            "Cybercriminal networks lure thousands into organized fraud operations involving deepfake technology."
        ],
        impact: "Billions of dollars lost due to scams and fraud linked to deepfake technology in the region and Increased demand for legal frameworks, AI detection technology, and public awareness campaigns.",
        sources: [
            { name: "Global Initiative", url: "https://globalinitiative.net/analysis/deepfakes-ai-cyber-scam-south-east-asia-organized-crime/" },
            { name: "Channel News Asia", url: "https://www.channelnewsasia.com/singapore/deepfake-video-pm-lee-investment-scam-4012946" },
            { name: "Bernama", url: "https://www.bernama.com/en/thoughts/news.php?id=2460435" } ,
            { name: "NTU", url: "https://www.ntu.edu.sg/business/news-events/news/story-detail/singapore-registers-asia-pacific-biggest-spike-in-identity-fraud" },
        ],
        videoUrl: ""
    },
    {
        id: 10,
        title: "Asia-Pacific: Surge in Deepfake Cases - Philippines",
        description: "The Philippines saw the most rapid growth in case numbers (4500% increase) in deepfake-related incidents between 2022 and 2023.",
        location: "Manila, Philippines",
        coordinates: [14.5995, 120.9842],
        category: "financial",
        date: "2022-2024",
        details: [
            "The Philippines saw the most rapid growth in case numbers (4500% increase).",
            "Vietnam recorded the highest regional increase in deepfake fraud (over 25%).",
            "Singapore reported a 240% rise in deepfake attacks in 2024, with political figures and ordinary citizens targeted.",
            "Cybercriminal networks lure thousands into organized fraud operations involving deepfake technology."
        ],
        impact: "Billions of dollars lost due to scams and fraud linked to deepfake technology in the region and Increased demand for legal frameworks, AI detection technology, and public awareness campaigns.",
        sources: [
            { name: "Global Initiative", url: "https://globalinitiative.net/analysis/deepfakes-ai-cyber-scam-south-east-asia-organized-crime/" },
            { name: "Channel News Asia", url: "https://www.channelnewsasia.com/singapore/deepfake-video-pm-lee-investment-scam-4012946" },
            { name: "Bernama", url: "https://www.bernama.com/en/thoughts/news.php?id=2460435" } ,
            { name: "NTU", url: "https://www.ntu.edu.sg/business/news-events/news/story-detail/singapore-registers-asia-pacific-biggest-spike-in-identity-fraud" },
        ],
        videoUrl: ""
    },
    {
        id: 37,
        title: "Surge in Deepfake Sex Crime and Voice Phishing Schemes in South Korea",
        description: "South Korea faces a dramatic rise in deepfake-related crimes: AI-powered deepfake images and audio have been widely used for sexual exploitation (especially of teen girls), social extortion, and increasingly sophisticated voice phishing scams targeting both young and elderly citizens.",
        location: "Seoul, South Korea",
        coordinates: [37.5665, 126.9780],
        category: "financial",
        date: "2024-2025",
        details: [
            "Deepfake sex crimes nearly doubled in four years, with 1,372 teenagers charged just in 2024 for creating/distributing explicit images and videos (Anadolu Agency, Straits Times)",
            "Telegram chat rooms with over 220,000 members shared explicit deepfake images targeting women and minors (Human Rights Watch)",
            "New law (September 2024) criminalizes possession and distribution of non-consensual deepfakes, with offenders facing up to 3 years in prison or heavy fines; further penalties if minors are involved (ISDP Report)",
            "AI-powered voice phishing scams caused over $470 million in financial losses in the first half of 2025; elderly and youth are increasingly targeted (Chosun English)",
            "North Korean hacker group “Kimsuky” used AI deepfake-generated IDs in cyberattacks targeting journalists and researchers (JoongAng Daily)"
        ],
        impact: "Thousands of victims (especially women and minors) suffered long-term psychological trauma, extortion, and social harm and Significant financial losses for citizens and erosion of trust in digital media and financial systems.",
        sources: [{ name: "AA", url: "https://www.aa.com.tr/en/asia-pacific/deepfake-crimes-among-south-korean-teens-nearly-double-in-4-years/3688330" },
                  { name: "HRW", url: "https://www.hrw.org/news/2024/08/29/south-koreas-digital-sex-crime-deepfake-crisis" },
                  { name: "ISDP", url: "https://www.isdp.eu/wp-content/uploads/2025/06/Brief-Korea-Crimes.pdf" },
                  { name: "JoongAng Daily", url: "https://koreajoongangdaily.joins.com/news/2025-09-15/business/industry/North-Korean-hackers-use-AIgenerated-fake-IDs-to-target-South-Koreans/2399391" },
                  { name: "Chosun", url: "https://www.chosun.com/english/national-en/2025/07/16/G2SPFIN2XRCQLCL4PA6NKT4ZKU/" },
                  { name: "Strait Times", url: "https://www.straitstimes.com/asia/east-asia/deepfake-other-digital-sex-crimes-by-teens-nearly-double-in-south-korea-in-four-years" }
        ],
        videoUrl: ""
    },
    {
        id: 38,
        title: "Deepfake Financial Scam in China",
        description: "Criminals used AI-generated deepfake video and voice calls to impersonate company bosses and friends, successfully tricking employees and individuals into wiring large sums of money.",
        location: "Shaanxi, China",
        coordinates: [34.3416, 108.9398],
        category: "financial",
        date: "2023-2024",
        details: [
            "In Shaanxi Province, a finance worker was deceived by a video call deepfake of her boss into transferring ¥1.86 million (about $258,000); police managed to freeze most of the funds after the scam was detected (Sangfor).",
            "Police report that in one period, deepfakes were used over 20 times in AI-aided loan and identity fraud cases, even bypassing facial recognition systems to register bank accounts and open credit lines (CNN).",
            "The trend triggered a surge in social media awareness and urgent calls for regulatory action, as AI scams are exploding across the country became a top trending hashtag on Weibo."
        ],
        impact: "Significant financial losses for companies and individuals; tens of millions of yuan lost in confirmed cases in 2023 alone (Sixth Tone) and Increased demand for legal frameworks, AI detection technology, and public awareness campaigns.",
        sources: [{ name: "Sangfor", url: "https://www.sangfor.com/blog/cybersecurity/fight-against-deepfake-scams-with-ai-and-biometrics" },
                  { name: "Sixth Tone", url: "https://www.sixthtone.com/news/1015378" },
                  { name: "CNN", url: "https://edition.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk" },
        ],
        videoUrl: ""
    },
    {   
        id: 40,
        title: "Deepfake and AI Scams Exploiting Turkey-Syria Earthquake Donations",
        description: "Fraudsters used AI-generated images and deepfake videos to create fake fundraising campaigns, exploiting global sympathy for Turkey and Syria earthquake victims. These scams tricked well-meaning donors into sending money to fraudulent accounts instead of genuine charities.",
        location: "Syria",
        coordinates: [35.1265, 38.0013],
        category: "financial",
        date: "February 2023",
        details: [
            "Deepfake images, including AI-generated photos of firefighters and disaster scenes, were posted on TikTok, Twitter, and other social media platforms with pleas for donations.",
            "Some scam accounts used cryptocurrency wallets and PayPal to collect funds, often linked to other fraudulent and spam activities.",
            "Fake livestreams depicted looped footage with sound effects and calls for donations, sometimes in languages unrelated to the affected region.",
            "Scammers hijacked real charity names and created convincing websites with stolen branding and logos to solicit false donations.",
            "Security experts recommended verifying charity credentials via official registers and avoiding donations to unknown or suspicious accounts."
        ],
        impact: "Thousands of dollars funneled away from genuine relief efforts, causing financial losses and undermining trust in charitable giving.",
        sources: [{ name: "BBC", url: "https://www.bbc.com/news/world-europe-64599553" },
                  { name: "Trellix", url: "https://www.trellix.com/en-gb/blogs/research/exploiting-tragedy-fake-donation-scams-amid-earthquake-in-turkey-and-syria/" },
                  { name: "Cyble", url: "https://cyble.com/blog/increase-in-fake-donation-schemes-following-massive-earthquake-in-turkey/" },
                  { name: "Petapixel", url: "https://petapixel.com/2023/02/15/scammers-using-ai-images-to-profit-from-turkey-syria-earthquake/" }
        ],
        videoUrl: ""
    }
];

const northAmericaCases = [
    {
        id: 11,
        title: "AI-Generated Celebrity Endorsement Scam",
        description: "Scammers used AI-generated videos of celebrities to promote fake investment schemes, resulting in millions of dollars in losses.",
        location: "Los Angeles, USA",
        coordinates: [34.0522, -118.2437],
        category: "financial",
        date: "February 2024",
        details: [
            "AI-generated videos of multiple celebrities.",
            "Promoted fake cryptocurrency investments.",
            "Estimated losses: $15 million."
        ],
        impact: "The scam resulted in significant financial losses for victims, particularly elderly individuals.",
        sources: [{ name: "AARP", url: "https://states.aarp.org/maryland/celebrity-scams-in-the-age-of-ai#:~:text=With%20the%20power%20of%20AI,convincing%20these%20schemes%20can%20be." }],
        videoUrl: ""
    },
    {
        id: 12,
        title: "AI Deepfakes Pollute Elections in 2024",
        description: "AI deepfake technology was used to create impersonations and false endorsements, misleading voters and polluting election discourse in multiple countries. Fake images, videos, and voice clones targeted politicians, celebrities, and major political events, making it harder to distinguish truth from fiction",
        location: "USA",
        coordinates: [38.9072, -77.0369],
        category: "politics",
        date: "2024",
        details: [
            "AI deepfake technology was used to create impersonations and false endorsements, misleading voters and polluting election discourse in multiple countries.",
            " AI-generated images and videos were openly shared as viral memes—often to glorify candidates or mock opponents—not always fully hiding their artificial origins",
            "Thousands received fake robocalls allegedly from President Biden advising Democrats not to vote in the New Hampshire primary. The voice was an AI deepfake, later traced to a political consultant fined $6 million and indicted for fraud."
        ],
        impact: "Trust in digital content eroded, with voters and observers struggling to assess what was real or fake.",
        sources: [{ name: "NPR", url: "https://www.npr.org/2024/12/21/nx-s1-5220301/deepfakes-memes-artificial-intelligence-elections" }],
        videoUrl: ""
    },
    {
        id: 13,
        title: "Deepfake Investment and Voice Scams in Canada",
        description: "Scammers used AI-generated deepfake videos and cloned voices of politicians, celebrities, news anchors, and even family members to promote fraudulent investment platforms and commit financial extortion, causing substantial losses among Canadians.",
        location: "Canada",
        coordinates: [56.1304, -106.3468],
        category: "hoax",
        date: "2024-2025",
        details: [
            "Deepfake videos circulated online showed well-known figures such as former Finance Minister Chrystia Freeland and even a fabricated Prime Minister endorsing cryptocurrency or investment opportunities, urging viewers to invest with guarantees of safety and high returns. Victims, including a couple from Ontario, lost their life savings in 2025 (Mitrade, CBC News).",
            "AI voice-cloning scams targeted seniors and families: e.g., a woman in Manitoba received a call that sounded exactly like her son’s voice, requesting money for an emergency. Other scams used the voices of politicians to try to trick constituents (CBC News).",
            "The Canadian Anti-Fraud Centre tracked a record $638 million in reported fraud losses in 2024, with deepfake and AI-driven scams on the rise (BioCatch, Anti-Fraud Centre).",
            "Quebec doctors warned about deepfake videos impersonating medical professionals, raising concerns about trust, false health claims, and public harm (CBC News)."
        ],
        impact: "Widespread financial loss, erosion of trust in digital communications, increased risk for seniors and the less digitally literate. Sparked government and financial institution warnings, new regulatory efforts, and increased public education on cyber risks.",
        sources: [{ name: "Mitrade", url: "https://www.mitrade.com/au/insights/news/live-news/article-3-967491-20250717" },
                  { name: "CBC News", url: "https://www.cbc.ca/news/canada/deepfake-ai-scam-ads-1.7104225" },
                  { name: "CBC News", url: "https://www.cbc.ca/news/canada/manitoba/artificial-intelligence-ai-scam-fraud-1.7534165" },
                  { name: "CBC News", url: "https://www.cbc.ca/news/canada/montreal/quebec-doctors-deepfake-scams-warning-1.7599117" },
                  { name: "Canadian Anti-Fraud Centre", url: "https://antifraudcentre-centreantifraude.ca/features-vedette/2024/07/bulletin-deepfakes-hypertrucage-eng.htm" },
                  { name: "BioCatch", url: "https://www.biocatch.com/blog/social-media-role-canada-fraud-epidemic" }
        ],
        videoUrl: ""
    },
    {
        id: 14,
        title: "Deepfake Extortion Scheme",
        description: "Criminals used AI-generated images of an individual in compromising situations for an extortion scheme.",
        location: "Mexico City, Mexico",
        coordinates: [19.4326, -99.1332],
        category: "financial",
        date: "April 2024",
        details: [
            "AI-generated compromising photos.",
            "Used to demand money from the victim.",
            "Local authorities launched an investigation."
        ],
        impact: "The case highlighted the psychological and financial toll of AI-enabled blackmail.",
        sources: [{ name: "American Bar Association", url: "https://www.americanbar.org/groups/senior_lawyers/resources/voice-of-experience/2025-june/what-deepfake-scams-teach-us-about-ai-and-fraud/" }],
        videoUrl: ""
    },
    {
        id: 15,
        title: "Voice Clone Fraud",
        description: "A family in Vancouver received a call from a voice clone of their son, who was allegedly in distress, demanding a ransom.",
        location: "Vancouver, Canada",
        coordinates: [49.2827, -123.1207],
        category: "hoax",
        date: "June 2024",
        details: [
            "AI voice cloning used to impersonate a son.",
            "Scammers demanded a ransom payment.",
            "Family reported the incident to police."
        ],
        impact: "The case demonstrated the real-world dangers of AI-generated audio for fraudulent purposes.",
        sources: [{ name: "NCOA", url: "https://www.ncoa.org/article/understanding-deepfakes-what-older-adults-need-to-know/" }],
        videoUrl: ""
    }
];

const southAmericaCases = [
    {
        id: 16,
        title: "Political Disinformation in Brazil",
        description: "Deepfake videos of political candidates were circulated on social media to spread false information before an election.",
        location: "Brasília, Brazil",
        coordinates: [-15.7801, -47.9292],
        category: "politics",
        date: "August 2024",
        details: [
            "Deepfakes targeting multiple candidates.",
            "Used to manipulate public opinion.",
            "Fact-checkers identified the content as fraudulent."
        ],
        impact: "The incident raised concerns about the use of AI in political campaigns.",
        sources: [{ name: "DFRLab", url: "https://dfrlab.org/2024/10/02/brazil-election-ai-research/" }],
        videoUrl: ""
    },
    {
        id: 17,
        title: "AI-Generated Fake News in Argentina",
        description: "An AI-generated article with fabricated quotes from a public figure was published on a fake news website.",
        location: "Buenos Aires, Argentina",
        coordinates: [-34.6037, -58.3816],
        category: "hoax",
        date: "July 2024",
        details: [
            "AI-written article with fabricated information.",
            "Published on a website designed to look legitimate.",
            "The public figure issued a formal denial."
        ],
        impact: "The case highlighted the ease of creating and distributing AI-generated fake news.",
        sources: [{ name: "NetLab UFRJ", url: "https://netlab.eco.ufrj.br/en/post/lessons-from-the-pre-campaign-the-challenge-of-combating-deepfakes-in-the-2024-elections-in-brazil" }],
        videoUrl: ""
    },
    {
        id: 18,
        title: "Deepfake Social Engineering Fraud in Chile",
        description: "Cybercriminals are using AI-generated deepfake videos and voices to conduct social engineering attacks targeting financial institutions and businesses in Chile, leading to financial losses and data breaches.",
        location: "Santiago, Chile",
        coordinates: [-33.4489, -70.6693],
        category: "financial",
        date: "January 2025",
        details: [
            "Fraudsters employ advanced AI to clone voices of executives and create fake video calls requesting fund transfers.",
            "Incidents include attempts to bypass biometric security systems and trick employees into unauthorized transactions.",
            "The scams rely on phishing combined with deepfake-generated social persuasion."
        ],
        impact: "Financial sector faces rising risks with complex frauds difficult to detect using traditional methods.",
        sources: [{ name: "Segurida Expo", url: "https://www.seguridadexpo.cl/en/these-are-the-digital-dangers-of-2025/" }],
        videoUrl: ""
    },
    {
        id: 19,
        title: "Deepfake Voice Cloning Scams in Peru",
        description: "Fraud groups used AI-powered deepfake voice imitation to closely mimic the voices of real people, executing scams and extortion schemes. Victims were deceived into transferring money following fake calls that sounded like their loved ones or acquaintances.",
        location: "Lima, Peru",
        coordinates: [-12.0464, -77.0428],
        category: "hoax",
        date: "2024-2025",
        details: [
            "Criminals obtained short audio clips from victims' social media and used them to create highly realistic voice clones.",
            "Scams included fake kidnappings, where relatives received ransom calls using the cloned voices of family members.",
            "Other scams involved impersonating someone to solicit money directly from their network under false pretenses.",
            "Peruvian news outlet El Comercio reported at least 55 instances of such AI scams in Peru."
        ],
        impact: "Victims suffered financial loss and emotional distress, believing their loved ones were truly endangered.",
        sources: [{ name: "InsightCrime", url: "https://insightcrime.org/news/fraud-groups-use-deepfakes-to-enhance-imitation-scams-in-peru/" }],
        videoUrl: ""
    },
    {
        id: 20,
        title: "Misinformation in Venezuela",
        description: "An AI-generated video of a journalist spreading false information about a protest was circulated widely online.",
        location: "Caracas, Venezuela",
        coordinates: [10.4806, -66.9036],
        category: "hoax",
        date: "March 2024",
        details: [
            "Deepfake video of a well-known journalist.",
            "Contained false claims about the protest.",
            "The journalist publicly denied the content."
        ],
        impact: "The incident led to increased distrust in traditional media and online content.",
        sources: [{ name: "DFRLab", url: "https://dfrlab.org/2024/11/26/brazil-election-ai-deepfakes/" }],
        videoUrl: ""
    }
];

const europeCases = [
    {
        id: 21,
        title: "Deepfake Political Speech in Ukraine",
        description: "A deepfake video of a Ukrainian politician making false statements about the conflict was widely circulated on social media, causing confusion and misinformation.",
        location: "Kyiv, Ukraine",
        coordinates: [50.4501, 30.5234],
        category: "politics",
        date: "March 2024",
        details: [
            "Deepfake video circulated on multiple social media platforms.",
            "Featured a prominent Ukrainian politician.",
            "Contained false statements about military operations."
        ],
        impact: "The video caused significant confusion among the public and was used by foreign actors to spread disinformation.",
        sources: [{ name: "CNN", url: "https://www.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk" }],
        videoUrl: ""
    },
    {
        id: 22,
        title: "Corporate CEO Deepfake Attack",
        description: "Cybercriminals used a deepfake video of a CEO to authorize fraudulent wire transfers, resulting in a $25 million loss for the company.",
        location: "Hong Kong, China",
        coordinates: [22.2783, 114.1747],
        category: "financial",
        date: "February 2024",
        details: [
            "Deepfake video call with company CEO.",
            "Authorized fraudulent wire transfers.",
            "Loss: $25 million."
        ],
        impact: "The attack resulted in significant financial losses and led to increased security measures in corporate environments.",
        sources: [{ name: "SC World", url: "https://www.scworld.com/news/deepfake-video-conference-convinces-employee-to-send-25m-to-scammers" }],
        videoUrl: ""
    },
    {
        id: 23,
        title: "Macron’s Deepfake Montages at AI Summit",
        description: "French President Emmanuel Macron created and shared a montage of deepfake videos of himself for the AI Summit in Paris, sparking debate on deepfake normalization and the balance between innovation and misinformation risk.",
        location: "Paris, France",
        coordinates: [48.8566, 2.3522],
        category: "hoax",
        date: "February 2025",
        details: [
            "French President Emmanuel Macron created and shared a montage of deepfake videos of himself for the AI Summit in Paris, sparking debate on deepfake normalization and the balance between innovation and misinformation risk.",
            "The incident caused panic and disruption, highlighting the potential for AI in local hoaxes.",
            
        ],
        impact: "Raised public awareness but also concern about trivializing deepfake risks.",
        sources: [{ name: "BBC", url: "https://www.bbc.com/news/articles/c3e1kne7q1qo" }],
        videoUrl: ""
    },
    {
        id: 24,
        title: "Political Scandal in Germany",
        description: "A deepfake video showing a politician accepting bribes was widely shared, causing a political scandal.",
        location: "Berlin, Germany",
        coordinates: [52.5200, 13.4050],
        category: "politics",
        date: "August 2023",
        details: [
            "Deepfake video showing a politician taking money.",
            "Caused a public and political outcry.",
            "The politician's party denied the video's authenticity."
        ],
        impact: "The scandal damaged the politician's reputation and led to an internal investigation.",
        sources: [{ name: "Bitdefender", url: "https://www.bitdefender.com/en-us/blog/labs/audio-deepfakes-celebrity-endorsed-giveaway-scams-and-fraudulent-investment-opportunities-flood-social-media-platforms" }],
        videoUrl: ""
    },
    {
        id: 25,
        title: "Deepfake Attack on Arup CEO, United Kingdom",
        description: "A finance employee at engineering firm Arup fell victim to a massive fraud of approximately $39 million after being contacted via a deepfake video resembling the CEO and other senior colleagues.",
        location: "United Kingdom",
        coordinates: [51.5074, -0.1278],
        category: "financial",
        date: "January 2024",
        details: [
            "The deepfake used real faces and voices from publicly available video conferences and online meetings.",
            "The employee believed the call was genuine and made 15 money transfers to the scammers' accounts in various countries.",
            "This incident serves as a warning about the threat of deepfakes to corporate security."
        ],
        impact: "The incident led to significant financial loss and highlighted vulnerabilities in corporate communication protocols.",
        sources: [{ name: "eftsure", url: "https://www.eftsure.com/blog/cyber-crime/these-7-deepfake-ceo-scams-prove-that-no-business-is-safe/" }],
        videoUrl: ""
    },
    {   
        id: 26,
        title: "Deepfake Attack Targeting Italian Corporations",
        description: "A series of deepfake scams targeted Italian business figures, including Giorgio Armani, with perpetrators posing as government officials to request funds for a journalist rescue operation.",
        location: "Rome, Italy",
        coordinates: [41.9028, 12.4964],
        category: "financial",
        date: "March 2025",
        details: [
            "The perpetrators exploited nationalist sentiment by claiming to be the Italian Minister of Defense.",
            "One victim transferred €1 million to an account in Hong Kong.",
            "The case demonstrates how deepfakes can be used in sophisticated social engineering schemes."
        ],
        impact: "The scams resulted in significant financial losses and raised awareness about the risks of deepfake technology in corporate fraud.",
        sources: [{ name: "The Guardian", url: "https://www.theguardian.com/world/2025/feb/10/ai-phone-scam-targets-italian-business-leaders-including-giorgio-armani" }],
        videoUrl: ""
    },
    {   
        id: 39,
        title: "Deepfake and AI Scams Exploiting Turkey-Syria Earthquake Donations",
        description: "Fraudsters used AI-generated images and deepfake videos to create fake fundraising campaigns, exploiting global sympathy for Turkey and Syria earthquake victims. These scams tricked well-meaning donors into sending money to fraudulent accounts instead of genuine charities.",
        location: "Turkey",
        coordinates: [39.9028, 32.4964],
        category: "financial",
        date: "February 2023",
        details: [
            "Deepfake images, including AI-generated photos of firefighters and disaster scenes, were posted on TikTok, Twitter, and other social media platforms with pleas for donations.",
            "Some scam accounts used cryptocurrency wallets and PayPal to collect funds, often linked to other fraudulent and spam activities.",
            "Fake livestreams depicted looped footage with sound effects and calls for donations, sometimes in languages unrelated to the affected region.",
            "Scammers hijacked real charity names and created convincing websites with stolen branding and logos to solicit false donations.",
            "Security experts recommended verifying charity credentials via official registers and avoiding donations to unknown or suspicious accounts."
        ],
        impact: "Thousands of dollars funneled away from genuine relief efforts, causing financial losses and undermining trust in charitable giving.",
        sources: [{ name: "BBC", url: "https://www.bbc.com/news/world-europe-64599553" },
                  { name: "Trellix", url: "https://www.trellix.com/en-gb/blogs/research/exploiting-tragedy-fake-donation-scams-amid-earthquake-in-turkey-and-syria/" },
                  { name: "Cyble", url: "https://cyble.com/blog/increase-in-fake-donation-schemes-following-massive-earthquake-in-turkey/" },
                  { name: "Petapixel", url: "https://petapixel.com/2023/02/15/scammers-using-ai-images-to-profit-from-turkey-syria-earthquake/" }
        ],
        videoUrl: ""
    }
];

const africaCases = [
    {
        id: 27,
        title: "Deepfake used in Political Protests",
        description: "AI-generated videos of a leader making false promises were used by opposition groups to galvanize protests.",
        location: "Cairo, Egypt",
        coordinates: [30.0444, 31.2357],
        category: "politics",
        date: "July 2024",
        details: [
            "Deepfake video targeting a political leader.",
            "Used as a tool for political opposition.",
            "The government issued a statement condemning the video."
        ],
        impact: "The use of AI in political disinformation escalated tensions during the protest period.",
        sources: [{ name: "Ecofin Agency", url: "https://www.ecofinagency.com/news/2406-47388-deepfake-threat-becomes-alarming-in-africa-as-ai-advances-faster-than-laws" }],
        videoUrl: ""
    },
    {
        id: 28,
        title: "AI-Enabled Voice Impersonation for Scam",
        description: "A business in South Africa was defrauded after an AI-generated voice call impersonating its CEO ordered a wire transfer.",
        location: "Johannesburg, South Africa",
        coordinates: [-26.2041, 28.0473],
        category: "financial",
        date: "March 2024",
        details: [
            "AI voice clone of the company's CEO.",
            "Used to trick a financial officer into transferring funds.",
            "Company lost a substantial amount."
        ],
        impact: "The case highlighted the vulnerability of corporate communication systems to AI-driven attacks.",
        sources: [{ name: "Security SA", url: "https://www.securitysa.com/21083r" }],
        videoUrl: ""
    },
    {
        id: 29,
        title: "AI-Generated Fake News Report",
        description: "A fabricated news report, complete with an AI-generated anchor, went viral, claiming a widespread natural disaster.",
        location: "Lagos, Nigeria",
        coordinates: [6.5244, 3.3792],
        category: "hoax",
        date: "February 2024",
        details: [
            "AI-generated video of a fake news anchor.",
            "Spreading false information about a disaster.",
            "Emergency services had to issue a public warning."
        ],
        impact: "The hoax caused public panic and diverted emergency resources.",
        sources: [{ name: "OCCRP", url: "https://www.occrp.org/en/news/identity-fraud-in-africa-rises-sharply-deepfakes-lead" }],
        videoUrl: ""
    },
    {
        id: 30,
        title: "Surge in Deepfake-Fueled Fraud and Disinformation",
        description: "Africa has witnessed a sevenfold increase in deepfake cases, with AI-generated videos, images, and audio used for identity fraud, targeted phishing scams, and political manipulation.",
        location: "Nigeria, Africa",
        coordinates: [9.0820, 8.6753],
        category: "financial",
        date: "2024-2025",
        details: [
            "Deepfake videos are used to impersonate executives, politicians, and celebrities, enabling financial scams and misinformation campaigns.",
            "Criminal syndicates exploited Telegram and other social networks to distribute deepfakes and hacking kits, targeting fintechs, banks, and local businesses.",
            "A notable scam involved a transnational syndicate leveraging deepfakes to authenticate fraudulent bank account openings and real estate transactions, resulting in millions of dollars lost."
        ],
        impact: "Significant risks to financial systems, public safety, and democratic stability, triggering panic and undermining trust in news and institutions.",
        sources: [{ name: "We Are Tech Africa", url: "https://www.wearetech.africa/en/fils-uk/news/tech/africa-vs-deepfakes-the-new-frontline-in-digital-disinformation" }],
        videoUrl: ""
    },
    {
        id: 31,
        title: "Deepfake Celebrity Videos to Glorify Burkina Faso Junta Leader Ibrahim Traoré",
        description: "Hundreds of AI-generated deepfake videos flooded social media portraying Captain Ibrahim Traoré, leader of Burkina Faso’s military government, as a pan-African hero. Many featured deepfake celebrities—such as Beyoncé, Rihanna, R. Kelly, Selena Gomez—singing his praises or appearing alongside him, while some videos included manipulated music lyrics and imagery.",
        location: "Burkina Faso",
        coordinates: [12.2522, -1.5928],
        category: "politics",
        date: "April 2025",
        details: [
            "Deepfakes included fictional scenes of Western celebrities in combat gear supporting Traoré, and AI-generated monologues or music videos.",
            "Several YouTube influencers earned thousands of dollars through monetized deepfake content, which was distributed on X, Facebook, Instagram, TikTok, YouTube, and WhatsApp.",
            "Viral videos (one reaching 4.5 million views) depicted fictional stories or rallies, often misassigning foreign footage to African political events.",
            "Influencer networks and pro-pan-Africanist communities amplified the content as propaganda, many with coordinated shifts in posting behavior that suggest organized information operations."
        ],
        impact: "Widespread disinformation and confusion regarding developments in Burkina Faso and Traoré’s regime.",
        sources: [{ name: "BBC Pidgin", url: "https://www.bbc.com/pidgin/articles/c17rqgg7nq2o" }],
        videoUrl: ""
    }
];

const australiaCases = [
    {
        id: 32,
        title: "Banking Deepfake Fraud",
        description: "Criminals used deepfake technology to bypass facial recognition systems at banks, successfully stealing customer funds.",
        location: "Sydney, Australia",
        coordinates: [-33.8688, 151.2093],
        category: "financial",
        date: "September 2023",
        details: [
            "Deepfake bypassed facial recognition.",
            "Targeted multiple bank branches.",
            "Exposed security vulnerabilities."
        ],
        impact: "The attack exposed vulnerabilities in banking security systems and led to increased investment in anti-deepfake detection technology.",
        sources: [{ name: "AFP Fact Check", url: "https://factcheck.afp.com/doc.afp.com.34766ZF" }],
        videoUrl: ""
    },
    {
        id: 33,
        title: "Political Misinformation in New Zealand",
        description: "A 74-year-old Taranaki grandmother Jill Creasy lost $224,000 to scammers who used a deepfake video of Prime Minister Christopher Luxon endorsing a Bitcoin investment scheme, claiming it was safe for pensioners.",
        location: "Wellington, New Zealand",
        coordinates: [-41.2865, 174.7762],
        category: "politics",
        date: "May 2024",
        details: [
            "Deepfake video showed PM Luxon apparently endorsing cryptocurrency investment for pensioners.",
            "Victim believed the endorsement was genuine and invested her life savings.",
            "Scammers operated through international criminal network using crypto exchanges to launder money.",
            "Both TSB bank and Easy Crypto contacted victim with concerns but she verified payments as legitimate."
        ],
        impact: "Demonstrated devastating financial impact of deepfake scams on vulnerable populations. PM's office stated he would never endorse specific investments, highlighting need for public awareness about sophisticated online scams targeting elderly.",
        sources: [{ name: "RNZ", url: "https://www.rnz.co.nz/news/national/531353/pensioner-loses-224k-after-being-tricked-by-ai-deepfake-christopher-luxon-cryptocurrency-investment-scam" }],
        videoUrl: ""
    },
    {
        id: 34,
        title: "AI-Generated Hoax in Fiji",
        description: "A deepfake video of a national figure announcing a fabricated state emergency was shared on social media.",
        location: "Suva, Fiji",
        coordinates: [-18.1248, 178.4312],
        category: "hoax",
        date: "April 2023",
        details: [
            "Deepfake of a public official.",
            "Announced a fake state emergency.",
            "The hoax was quickly debunked by the government."
        ],
        impact: "The incident caused brief panic and highlighted the potential for AI-generated hoaxes in the Pacific Islands.",
        sources: [{ name: "CSIS", url: "https://www.csis.org/analysis/cyber-scamming-goes-global-unveiling-southeast-asias-high-tech-fraud-factories" }],
        videoUrl: ""
    },
    {
        id: 35,
        title: "Scam in Papua New Guinea",
        description: "An AI-generated voice clone of a family member was used to scam a local person for money.",
        location: "Port Moresby, Papua New Guinea",
        coordinates: [-9.4438, 147.1797],
        category: "financial",
        date: "January 2024",
        details: [
            "AI voice cloning of a family member.",
            "Used to request an urgent financial transfer.",
            "The victim lost money before realizing the scam."
        ],
        impact: "The case demonstrated the global reach of AI-enabled scams.",
        sources: [{ name: "Security.org", url: "https://www.security.org/resources/deepfake-statistics/" }],
        videoUrl: ""
    },
    {
        id: 36,
        title: "Teenager Arrested for Creating Deepfake Pornography Involving School Students",
        description: "A teenager was arrested for creating and distributing deepfake pornography involving approximately 50 female students from a school, triggering a national investigation and the creation of new laws related to deepfake pornography.",
        location: "Victoria, Australia",
        coordinates: [-37.8136, 144.9631],
        category: "hoax",
        date: "June 2024",
        details: [
            "The deepfake images were created from the female students' social media photos without their permission.",
            "The government proposed prison sentences of up to seven years for related offenses.",
            "This case raised issues of gender-based violence and digital privacy."
        ],
        impact: "Causing serious psychological and emotional trauma to student victims, including mental health disorders such as severe stress, anxiety, and deep shame. One victim reportedly vomited due to fear and pressure caused by the spread of deepfake images.",
        sources: [{ name: "CNN", url: "https://edition.cnn.com/2024/06/13/australia/australia-boy-arrested-deepfakes-schoolgirls-intl-hnk" }],
        videoUrl: ""
    },
];  

// Combine all cases into a single array for mapping and filtering
const allCases = [
    ...asiaCases,
    ...northAmericaCases,
    ...southAmericaCases,
    ...europeCases,
    ...africaCases,
    ...australiaCases,
    // Add cases for Oceania and Antarctica here if needed in the future
];

// Initialize map with better styling
const map = L.map('map', {
    zoomControl: false,
    attributionControl: false
}).setView([20, 0], 2);

// Add custom zoom control
L.control.zoom({
    position: 'bottomright'
}).addTo(map);

// Add attribution control
L.control.attribution({
    position: 'bottomright',
    prefix: false
}).addTo(map);

// Add tile layer with better styling
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors, © CARTO',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(map);

// Initialize marker clusters
const markers = L.markerClusterGroup({
    chunkedLoading: true,
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: false,
    zoomToBoundsOnClick: true,
    maxClusterRadius: 50,
    iconCreateFunction: function(cluster) {
        const count = cluster.getChildCount();
        let size = 'small';
        if (count >= 10) size = 'large';
        else if (count >= 5) size = 'medium';
        
        return L.divIcon({
            html: `<div><span>${count}</span></div>`,
            className: `marker-cluster marker-cluster-${size}`,
            iconSize: L.point(40, 40)
        });
    }
});

// Global variables for filtering
let currentFilter = 'all';
let currentDateFilter = 'all';
let searchQuery = '';
let allMarkers = [];
let isFilterPanelOpen = false;

// DOM elements
const caseCard = document.getElementById('case-card');
const closeCardBtn = document.getElementById('close-card');
const cardTitle = document.getElementById('card-title');
const mainCaseView = document.getElementById('main-case-view');
const cardVideo = document.getElementById('card-video');
const cardLocation = document.getElementById('card-location');
const cardDate = document.getElementById('card-date');
const cardDescription = document.getElementById('card-description');
const cardDetails = document.getElementById('card-details');
const cardSources = document.getElementById('card-sources');
const viewOtherCasesBtn = document.getElementById('view-other-cases-btn');
const otherCasesView = document.getElementById('other-cases-view');
const topCasesList = document.getElementById('top-cases-list');
const backToMainBtn = document.getElementById('back-to-main-btn');

// Control panel elements
const controlPanel = document.getElementById('control-panel');
const togglePanelBtn = document.getElementById('toggle-panel');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const filterButtons = document.querySelectorAll('.filter-btn');
const dateFilter = document.getElementById('date-filter');
const totalCasesEl = document.getElementById('total-cases');
const visibleCasesEl = document.getElementById('visible-cases');

// Create custom markers for each case
function createCustomMarker(caseItem) {
    const categoryColors = {
        politics: '#dc2626',
        financial: '#059669', 
        hoax: '#d97706',
        social: '#7c3aed'
    };
    
    const color = categoryColors[caseItem.category] || '#6b7280';
    
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div class="marker-${caseItem.category}" style="background-color: ${color};"></div>`,
        iconSize: [20, 20],
        iconAnchor: [10, 10]
    });
    
    const marker = L.marker(caseItem.coordinates, { icon: customIcon });
    
    // Add popup with preview
    const popupContent = `
        <div class="marker-popup">
            <h3>${caseItem.title}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${caseItem.location}</p>
            <p><i class="fas fa-calendar-alt"></i> ${caseItem.date}</p>
            <span class="category-badge ${caseItem.category}">${caseItem.category}</span>
            <br><br>
            <button onclick="displayCaseDetails(${caseItem.id})" class="btn btn-primary" style="font-size: 0.8rem; padding: 0.5rem 1rem;">View Details</button>
        </div>
    `;
    
    marker.bindPopup(popupContent, {
        maxWidth: 250,
        className: 'custom-popup'
    });
    
    marker.caseData = caseItem;
    return marker;
}

// Initialize all markers
function initializeMarkers() {
    allCases.forEach(caseItem => {
        const marker = createCustomMarker(caseItem);
        allMarkers.push(marker);
    });
    
    updateMarkerDisplay();
    updateStatistics();
}

// Update marker display based on filters
function updateMarkerDisplay() {
    markers.clearLayers();
    
    const filteredMarkers = allMarkers.filter(marker => {
        const caseData = marker.caseData;
        
        // Category filter
        if (currentFilter !== 'all' && caseData.category !== currentFilter) {
            return false;
        }
        
        // Date filter
        if (currentDateFilter !== 'all') {
            const caseYear = extractYear(caseData.date);
            if (currentDateFilter === '2024' && caseYear !== 2024) return false;
            if (currentDateFilter === '2023' && caseYear !== 2023) return false;
            if (currentDateFilter === 'recent') {
                const currentYear = new Date().getFullYear();
                if (caseYear < currentYear - 1) return false;
            }
        }
        
        // Search filter
        if (searchQuery) {
            const searchLower = searchQuery.toLowerCase();
            return caseData.title.toLowerCase().includes(searchLower) ||
                   caseData.description.toLowerCase().includes(searchLower) ||
                   caseData.location.toLowerCase().includes(searchLower);
        }
        
        return true;
    });
    
    filteredMarkers.forEach(marker => {
        markers.addLayer(marker);
    });
    
    map.addLayer(markers);
    updateStatistics(filteredMarkers.length);
}

// Extract year from date string
function extractYear(dateString) {
    const match = dateString.match(/\d{4}/);
    return match ? parseInt(match[0]) : new Date().getFullYear();
}

function displayCaseDetails(caseId) {
    const caseItem = allCases.find(c => c.id === caseId);
    if (!caseItem) return;
    
    otherCasesView.classList.remove('active-view');
    mainCaseView.classList.add('active-view');
    document.body.classList.add('no-scroll');

    cardTitle.textContent = caseItem.title;

    if (caseItem.videoUrl) {
        cardVideo.src = caseItem.videoUrl;
        cardVideo.style.display = 'block';
    } else {
        cardVideo.style.display = 'none';
        cardVideo.pause();
    }

    cardLocation.innerHTML = `<i class="fas fa-map-marker-alt"></i> ${caseItem.location}`;
    cardDate.innerHTML = `<i class="fas fa-calendar-alt"></i> ${caseItem.date}`;
    cardDescription.innerHTML = caseItem.description;

    cardDetails.innerHTML = '';
    if (caseItem.details) {
        caseItem.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            cardDetails.appendChild(li);
        });
    }

    cardSources.innerHTML = '';
    if (caseItem.sources) {
        caseItem.sources.forEach(source => {
            const link = document.createElement('a');
            link.href = source.url;
            link.textContent = source.name;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            cardSources.appendChild(link);
        });
    }
    
    viewOtherCasesBtn.textContent = `View Other Cases in ${getContinentName(caseItem.coordinates)}`;
    viewOtherCasesBtn.onclick = () => {
        displayOtherCases(caseItem.id, getContinentName(caseItem.coordinates));
    };

    caseCard.classList.add('active');
    
    // Animate card appearance
    setTimeout(() => {
        caseCard.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);
}

function displayOtherCases(currentCaseId, continentName) {
    mainCaseView.classList.remove('active-view');
    otherCasesView.classList.add('active-view');
    cardVideo.pause();

    cardTitle.textContent = `Other AI Cases in ${continentName}`;

    topCasesList.innerHTML = '';
    const continentCases = getContinentCases(continentName);
    const otherCases = continentCases.filter(c => c.id !== currentCaseId);

    otherCases.forEach(caseItem => {
        const li = document.createElement('li');
        const titleLink = document.createElement('a');
        titleLink.textContent = caseItem.title;
        titleLink.onclick = (e) => {
            e.preventDefault();
            displayCaseDetails(caseItem.id);
        };
        li.appendChild(titleLink);
        
        const meta = document.createElement('small');
        meta.textContent = ` (${caseItem.location}, ${caseItem.date})`;
        li.appendChild(meta);
        
        // Add category badge
        const badge = document.createElement('span');
        badge.className = `category-badge ${caseItem.category}`;
        badge.textContent = caseItem.category;
        li.appendChild(badge);
        
        topCasesList.appendChild(li);
    });
    
    backToMainBtn.textContent = 'Back to Current Case';
    backToMainBtn.onclick = () => {
        displayCaseDetails(currentCaseId);
    };

    caseCard.classList.add('active');
}

// Event listeners for control panel
togglePanelBtn.addEventListener('click', toggleControlPanel);

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    updateMarkerDisplay();
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    updateMarkerDisplay();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.category;
        updateMarkerDisplay();
    });
});

dateFilter.addEventListener('change', (e) => {
    currentDateFilter = e.target.value;
    updateMarkerDisplay();
});

closeCardBtn.addEventListener('click', () => {
    caseCard.style.transform = 'translate(-50%, -50%) scale(0.8)';
    setTimeout(() => {
        caseCard.classList.remove('active');
        cardVideo.pause();
    }, 200);
});

// Control panel functions
function toggleControlPanel() {
    isFilterPanelOpen = !isFilterPanelOpen;
    
    if (isFilterPanelOpen) {
        controlPanel.classList.add('open');
        map.getContainer().classList.add('panel-open');
        togglePanelBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    } else {
        controlPanel.classList.remove('open');
        map.getContainer().classList.remove('panel-open');
        togglePanelBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    }
    
    // Invalidate map size after panel animation
    setTimeout(() => {
        map.invalidateSize();
    }, 300);
}

// Update statistics
function updateStatistics(visibleCount = null) {
    const total = allCases.length;
    const visible = visibleCount !== null ? visibleCount : total;
    
    totalCasesEl.textContent = total;
    visibleCasesEl.textContent = visible;
    
    // Update category counts
    const categoryCounts = {
        all: total,
        politics: 0,
        financial: 0,
        hoax: 0,
        social: 0
    };
    
    allCases.forEach(caseItem => {
        if (categoryCounts.hasOwnProperty(caseItem.category)) {
            categoryCounts[caseItem.category]++;
        }
    });
    
    filterButtons.forEach(btn => {
        const category = btn.dataset.category;
        const countEl = btn.querySelector('.count');
        if (countEl && categoryCounts.hasOwnProperty(category)) {
            countEl.textContent = categoryCounts[category];
        }
    });
}

// Add geocoder control
L.Control.geocoder({
    position: 'topright',
    placeholder: 'Search locations...',
    errorMessage: 'Location not found'
}).addTo(map);

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeMarkers();
    
    // Auto-open control panel on desktop
    if (window.innerWidth > 768) {
        setTimeout(() => {
            toggleControlPanel();
        }, 500);
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    map.invalidateSize();
    
    // Auto-close panel on mobile
    if (window.innerWidth <= 768 && isFilterPanelOpen) {
        toggleControlPanel();
    }
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Press 'F' to toggle filter panel
    if (e.key === 'f' || e.key === 'F') {
        if (!document.activeElement || document.activeElement.tagName !== 'INPUT') {
            e.preventDefault();
            toggleControlPanel();
        }
    }
    
    // Press 'Escape' to close card
    if (e.key === 'Escape') {
        if (caseCard.classList.contains('active')) {
            closeCardBtn.click();
        }
    }
});

// --- Helper Functions to get continent name and cases ---
function getContinentName(coordinates) {
    const lat = coordinates[0];
    const lon = coordinates[1];
    
    // Asia - Asia Timur, Tenggara, Selatan, Rusia, Timur Tengah
    // Saudi Arabia, Malaysia, Indonesia, Pakistan, India, Jepang, Vietnam, Philippine, Singapore
    if ((lat >= -10 && lat <= 80 && lon >= 60 && lon <= 180) || // Main Asia
        (lat >= 12 && lat <= 42 && lon >= 26 && lon <= 60) || // Middle East including Saudi Arabia
        (lat >= 35 && lat <= 80 && lon >= 26 && lon <= 180)) return "Asia"; // Russia and Central Asia
    
    // Europe - Eropa Barat, Timur, Utara, Selatan
    // UK, Jerman, Prancis, Italia, Spanyol, Ukraina, Turkey
    if ((lat >= 35 && lat <= 75 && lon >= -10 && lon <= 50) || // Main Europe
        (lat >= 50 && lat <= 75 && lon >= -25 && lon <= 60) || // Northern Europe/UK
        (lat >= 35 && lat <= 50 && lon >= 20 && lon <= 50)) return "Europe"; // Eastern Europe including Turkey
    
    // North America - USA, Kanada, Meksiko, Amerika Tengah
    if ((lat >= 25 && lat <= 75 && lon >= -170 && lon <= -52) || // USA/Canada
        (lat >= 7 && lat <= 32 && lon >= -118 && lon <= -60)) return "North America"; // Mexico/Central America
    
    // South America - Brasil, Argentina, Chile, Peru, Venezuela
    if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) return "South America";
    
    // Africa - Mesir, Afrika Selatan, Nigeria, Kenya, Ghana
    if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 52) return "Africa";
    
    // Australia/Oceania - Australia, Selandia Baru, Fiji, Papua New Guinea
    if ((lat >= -47 && lat <= -9 && lon >= 112 && lon <= 180) || // Australia
        (lat >= -47 && lat <= 0 && lon >= 165 && lon <= 180) || // New Zealand
        (lat >= -25 && lat <= 25 && lon >= 130 && lon <= 180)) return "Australia"; // Pacific Islands
    
    return "Unknown Continent";
}

function getContinentCases(continentName) {
    switch(continentName) {
        case "Asia": return asiaCases;
        case "North America": return northAmericaCases;
        case "South America": return southAmericaCases;
        case "Europe": return europeCases;
        case "Africa": return africaCases;
        case "Australia": return australiaCases;
        default: return [];
    }
}

// Make displayCaseDetails globally accessible
window.displayCaseDetails = displayCaseDetails;

// Add panel toggle button for mobile
const panelToggleBtn = document.createElement('button');
panelToggleBtn.className = 'panel-toggle';
panelToggleBtn.innerHTML = '<i class="fas fa-filter"></i>';
panelToggleBtn.onclick = toggleControlPanel;
document.body.appendChild(panelToggleBtn);

// Show/hide toggle button based on panel state
function updateToggleButton() {
    if (isFilterPanelOpen) {
        panelToggleBtn.classList.add('hidden');
        panelToggleBtn.classList.remove('visible');
    } else {
        panelToggleBtn.classList.remove('hidden');
        panelToggleBtn.classList.add('visible');
    }
}

// Update toggle button when panel state changes
const originalToggle = toggleControlPanel;
toggleControlPanel = function() {
    originalToggle();
    updateToggleButton();
};

// Initialize toggle button state
updateToggleButton();