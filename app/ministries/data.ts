import {
  BookOpen,
  Users,
  Stethoscope,
  Radio,
  Shield,
  Printer,
  Heart,
  Zap,
  BarChart3,
  Briefcase,
  Megaphone,
  Scale,
} from "lucide-react"

export const departments = [
  {
    id: 1,
    slug: "adventist-chaplaincy-ministries",
    title: "Adventist Chaplaincy Ministries",
    icon: Shield,
    logo: "/images/ministries/chaplaincy.png",
    description:
      "Serving Adventist chaplains and clergy in campuses, communities, correctional facilities, healthcare, the military, and workplaces.",
    overview:
      "Adventist Chaplaincy Ministries provides spiritual care in institutions beyond the local church, placing trained chaplains where people need hope most.",
    focusAreas: ["Campus chaplaincy", "Healthcare and military chaplaincy", "Community and workplace ministry"],
    website: "AdventistChaplains.org",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    slug: "childrens-ministries",
    title: "Children's Ministries",
    icon: Users,
    logo: "/images/ministries/children.png",
    description:
      "Developing age-appropriate resources and programs for children from birth to early teens, nurturing faith and leadership.",
    overview:
      "Children's Ministries partners with parents and the church to help children fall in love with Jesus through Bible teaching, fun activities, and discipleship.",
    focusAreas: ["Sabbath School for children", "Vacation Bible Schools and clubs", "Parent and teacher resourcing"],
    website: "children.adventist.org",
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 3,
    slug: "communication",
    title: "Communication",
    icon: Megaphone,
    logo: "/images/ministries/communication.png",
    description:
      "Telling the church's story through media, branding, and digital tools including web, video, and social platforms.",
    overview:
      "The Communication department helps the church share the gospel clearly and creatively, online and offline, with members and the wider community.",
    focusAreas: ["Digital media and storytelling", "Branding and public relations", "Training local communication teams"],
    website: "adventist.org",
    color: "from-orange-500 to-yellow-500",
  },
  {
    id: 4,
    slug: "education",
    title: "Education",
    icon: BookOpen,
    logo: "/images/ministries/education.png",
    description:
      "Overseeing a global network of Adventist schools, colleges, and universities committed to holistic Christian education.",
    overview:
      "Adventist Education seeks to restore the image of God in students by integrating faith, learning, and service in every classroom.",
    focusAreas: ["Support for teachers and chaplains", "Curriculum built on biblical values", "Campus spiritual life"],
    website: "education.adventist.org",
    color: "from-green-500 to-teal-500",
  },
  {
    id: 5,
    slug: "family-ministries",
    title: "Family Ministries",
    icon: Heart,
    logo: "/images/ministries/family.png",
    description:
      "Strengthening marriages and families with Bible-based guidance, seminars, and practical resources for every life stage.",
    overview:
      "Family Ministries equips couples, parents, and singles to build Christ-centered homes that reflect God's love to the world.",
    focusAreas: ["Marriage enrichment and counseling", "Parenting and family life education", "Support for blended and single-parent families"],
    website: "family.adventist.org",
    color: "from-red-500 to-pink-500",
  },
  {
    id: 6,
    slug: "health-ministries",
    title: "Health Ministries",
    icon: Stethoscope,
    logo: "/images/ministries/health.png",
    description:
      "Promoting wholistic health and healing through lifestyle education, medical outreach, and practical wellness programs.",
    overview:
      "Health Ministries follows Christ's method of ministry—meeting physical, mental, and spiritual needs—to lead people to abundant life in Him.",
    focusAreas: ["Lifestyle medicine and wellness programs", "Health expos and community outreach", "Training health advocates in the church"],
    website: "healthministries.com",
    color: "from-emerald-500 to-green-500",
  },
  {
    id: 7,
    slug: "public-affairs-religious-liberty",
    title: "Public Affairs & Religious Liberty",
    icon: Scale,
    description:
      "Defending freedom of conscience and religion for all people through legal advocacy and diplomatic engagement.",
    overview:
      "Public Affairs & Religious Liberty represents the church before governments and organizations, promoting religious liberty and human rights.",
    focusAreas: ["Advocacy for religious freedom", "Legal and policy support", "Education on rights and responsibilities"],
    website: "adventistliberty.org",
    color: "from-indigo-500 to-blue-500",
  },
  {
    id: 8,
    slug: "publishing",
    title: "Publishing",
    icon: Printer,
    description:
      "Supporting Adventist publishing houses and literature evangelists in sharing truth-filled books and magazines.",
    overview:
      "The Publishing department uses printed and digital literature as a silent messenger, taking the gospel into homes and communities.",
    focusAreas: ["Literature evangelism", "Book and magazine production", "Digital and print distribution channels"],
    website: "publishing.adventist.org",
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 9,
    slug: "sabbath-school-personal-ministries",
    title: "Sabbath School & Personal Ministries",
    icon: BookOpen,
    description:
      "Providing Bible study guides and training members for personal witnessing, small groups, and evangelism.",
    overview:
      "Sabbath School & Personal Ministries equips every member to be a disciple and a disciple-maker through study, fellowship, and outreach.",
    focusAreas: ["Sabbath School Bible study", "Small groups and classes", "Personal evangelism and discipleship"],
    website: "sabbathschoolpersonalministries.org",
    color: "from-cyan-500 to-blue-500",
  },
  {
    id: 10,
    slug: "stewardship",
    title: "Stewardship",
    icon: BarChart3,
    description:
      "Teaching biblical principles of managing time, talents, finances, and resources for God's glory.",
    overview:
      "Stewardship Ministries helps members recognize God as Owner of all and respond with joyful, faithful living and giving.",
    focusAreas: ["Tithes and offerings education", "Personal financial stewardship", "Time and spiritual gifts management"],
    website: "stewardship.adventist.org",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 11,
    slug: "womens-ministries",
    title: "Women's Ministries",
    icon: Users,
    description:
      "Empowering women through discipleship, leadership development, and ministries of compassion and advocacy.",
    overview:
      "Women's Ministries creates safe spaces for women to grow spiritually, serve, and lead in church and community.",
    focusAreas: ["Spiritual growth and mentoring", "Leadership training and scholarships", "Abuse prevention and advocacy"],
    website: "women.adventist.org",
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 12,
    slug: "youth-ministries",
    title: "Youth Ministries",
    icon: Zap,
    description:
      "Mentoring young people as disciples of Jesus through clubs, camps, service projects, and leadership opportunities.",
    overview:
      "Youth Ministries believes young people are the church of today, engaging them in meaningful mission, worship, and community.",
    focusAreas: ["Pathfinders and Adventurers", "Youth congresses and camps", "Community service and evangelism"],
    website: "gcyouthministries.org",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: 13,
    slug: "ministerial-association",
    title: "Ministerial Association",
    icon: Briefcase,
    description:
      "Supporting pastors, elders, and their families with resources, mentoring, and continuing education.",
    overview:
      "The Ministerial Association cares for those who care for others, strengthening pastoral leaders in their calling and family life.",
    focusAreas: ["Pastoral training and resourcing", "Family support for ministers", "Spiritual renewal and retreats"],
    website: "ministerial.adventist.org",
    color: "from-slate-500 to-gray-500",
  },
]

export const featuredMinistry = {
  title: "Voice of Prophecy",
  slug: "voice-of-prophecy",
  icon: Radio,
  description:
    "The Voice of Prophecy exists to proclaim the everlasting gospel of Christ—leading people to accept Jesus as their personal Savior and nurturing them in preparation for His soon return.",
  longDescription:
    "A leader in religious broadcasting for more than 89 years, the Voice of Prophecy focuses on God's love and heralds the soon return of Christ—providing hope to broken people and guidance for daily living.",
  mission: "Proclaim the everlasting gospel of Christ",
  impact: "89+ years of faithful broadcasting reaching millions",
}

