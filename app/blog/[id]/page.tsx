"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Heart, MessageCircle, Share2, Bookmark } from "lucide-react"
import { useState } from "react"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "Finding Peace in Times of Trouble: A Biblical Perspective",
    content: `# Finding Peace in Times of Trouble: A Biblical Perspective

In today's fast-paced world, finding peace can seem impossible. However, the Bible offers timeless wisdom that can help us navigate through troubled waters and discover true tranquility.

## Understanding Biblical Peace

The concept of peace in the Bible goes far beyond the absence of conflict. It encompasses wholeness, completeness, and harmony with God. When Jesus said, "Peace I leave with you; my peace I give you" (John 14:27), He was offering something profound and transformative.

## Practical Steps to Biblical Peace

### 1. Prayer and Meditation
Regular prayer is the foundation of finding peace. The Psalmist reminds us, "Be still, and know that I am God" (Psalm 46:10). In our moments of stillness, we create space for God's peace to fill our hearts.

### 2. Trust in God's Sovereignty
Understanding that God is in control brings immense peace. Isaiah 26:3 tells us, "You will keep in perfect peace those whose minds are steadfast, because they trust in you."

### 3. Community Support
The early church understood the power of community in maintaining peace. Acts 2:42 shows how believers "devoted themselves to the apostles' teaching and to fellowship, to the breaking of bread and to prayer."

## Applying Peace in Daily Life

### Morning Routines
Starting each day with prayer and Scripture reading sets a peaceful tone for whatever challenges may come. Consider these practices:

- Begin with gratitude for God's protection through the night
- Read a Psalm of peace (Psalm 23, Psalm 46, or Psalm 91)
- Commit your day's plans to God in prayer

### Handling Difficult Situations
When troubles arise, remember these biblical principles:

1. **Cast Your Cares**: "Cast all your anxiety on him because he cares for you" (1 Peter 5:7)
2. **Seek Wisdom**: James 1:5 promises wisdom to those who ask
3. **Remember God's Faithfulness**: Reflect on past deliverances

## The Peace That Surpasses Understanding

Philippians 4:7 offers this beautiful promise: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." This isn't just temporary relief—it's divine protection for our inner being.

## Conclusion

Finding peace in troubled times isn't about ignoring problems or pretending everything is perfect. It's about anchoring our souls in the unchanging character of God and His promises. As we practice these biblical principles, we'll discover that true peace isn't the absence of trouble, but the presence of God in the midst of it.

May you find this peace that passes understanding as you walk your journey of faith.`,
    author: "Pastor James Mwangi",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Spiritual Growth",
    image: "/blog-peace.jpg",
    likes: 145,
    comments: 23,
    tags: ["Peace", "Biblical Wisdom", "Spiritual Growth"]
  },
  {
    id: 2,
    title: "The Power of Prayer: Transforming Your Daily Life",
    content: `# The Power of Prayer: Transforming Your Daily Life

Prayer is more than just a religious duty; it's a powerful tool that can transform every aspect of your life. When we engage in meaningful conversation with God, we open ourselves to divine guidance, comfort, and transformation.

## Understanding True Prayer

### What Prayer Really Is
Prayer is simply talking with God—sharing our hearts, listening for His voice, and aligning our will with His. Jesus taught His disciples to pray with both simplicity and depth, showing that prayer should be both accessible and profound.

### The Biblical Foundation

The Bible is filled with examples of prayer's power:

- **Daniel**: Prayed three times daily, even when it was illegal (Daniel 6:10)
- **Hannah**: Prayed with such passion that God "remembered her" (1 Samuel 1:19)
- **Paul**: Prayed constantly, seeing prayer as essential as breathing (1 Thessalonians 5:17)

## Transforming Your Daily Life Through Prayer

### Morning Prayer: Setting the Tone
Starting your day with prayer establishes God's presence from the beginning:

1. **Gratitude**: Thank God for the gift of a new day
2. **Guidance**: Ask for wisdom and direction
3. **Protection**: Commit your day to God's care

### Prayer Throughout the Day
Maintaining a prayerful attitude keeps us connected:

- **Meal Prayers**: Simple thanks for God's provision
- **Decision Prayers**: Seeking guidance before important choices
- **Crisis Prayers**: Immediate help when challenges arise

### Evening Prayer: Reflection and Rest
Ending the day with prayer brings closure and peace:

1. **Review**: Thank God for His presence throughout the day
2. **Confession**: Acknowledge shortcomings and seek forgiveness
3. **Trust**: Commit your night to God's protection

## The Transformative Power of Prayer

### Inner Peace
Regular prayer brings a deep sense of peace that circumstances cannot shake. This isn't just psychological—it's spiritual reality as God's presence calms our hearts.

### Clearer Direction
When we pray about decisions, we often find clarity that human reasoning cannot provide. God promises wisdom "generously to all without finding fault" (James 1:5).

### Stronger Relationships
Prayer changes us, which naturally improves our relationships. As we become more patient, loving, and forgiving through prayer, our interactions with others reflect God's character.

## Practical Prayer Tips

### Create a Prayer Space
Designate a specific place and time for prayer to build consistency.

### Use Scripture in Prayer
Incorporate Bible verses into your prayers—this aligns your heart with God's Word.

### Keep a Prayer Journal
Recording prayers helps track God's faithfulness and maintains focus.

### Pray with Others
Corporate prayer has special power—find prayer partners or join prayer groups.

## Conclusion

Prayer is not just an activity; it's a relationship that transforms every aspect of life. As you develop this habit of conversation with God, you'll discover the profound difference it makes in your daily experience.

Remember, God wants to communicate with you more than you want to communicate with Him. Open your heart, speak honestly, and listen expectantly. The transformation will follow.`,
    author: "Sarah Kamau",
    date: "2024-03-12",
    readTime: "7 min read",
    category: "Prayer",
    image: "/blog-prayer.jpg",
    likes: 89,
    comments: 15,
    tags: ["Prayer", "Spiritual Discipline", "Daily Devotion"]
  },
  {
    id: 3,
    title: "Building Strong Families: Biblical Principles for Modern Homes",
    content: `# Building Strong Families: Biblical Principles for Modern Homes

Family is the foundation of society, and the Bible provides clear guidance on how to build strong, healthy families that honor God and bless all members. In today's challenging world, these timeless principles are more relevant than ever.

## God's Design for Family

### The Biblical Foundation
From the beginning, God established family as His primary institution for human society. Genesis 2:24 shows us His design: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh."

### The Purpose of Family
God created families for several key purposes:

1. **Companionship**: "It is not good for the man to be alone" (Genesis 2:18)
2. **Procreation**: "Be fruitful and increase in number" (Genesis 1:28)
3. **Spiritual Training**: "Train up a child in the way he should go" (Proverbs 22:6)
4. **Mutual Support**: Bearing one another's burdens (Galatians 6:2)

## Core Biblical Principles for Strong Families

### 1. Love as the Foundation
Paul's beautiful description in 1 Corinthians 13 provides the blueprint:

- **Patience**: Long-suffering with each other's imperfections
- **Kindness**: Gentle treatment even when frustrated
- **Selflessness**: Putting others' needs before your own
- **Forgiveness**: Quick to reconcile and slow to anger

### 2. Communication That Builds
Ephesians 4:29 instructs: "Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs."

### 3. Spiritual Leadership
Joshua's declaration sets the standard: "As for me and my household, we will serve the Lord" (Joshua 24:15).

## Practical Applications for Modern Families

### Quality Time Together
In our busy world, intentional family time is crucial:

- **Regular Family Worship**: Daily or weekly times of prayer and Bible study
- **Shared Meals**: Using dinner time for meaningful conversation
- **Activities Together**: Creating shared memories and experiences

### Financial Stewardship
Biblical financial principles strengthen families:

1. **Tithing**: Honoring God with the firstfruits (Malachi 3:10)
2. **Budgeting**: Wise planning and avoiding debt (Proverbs 22:7)
3. **Generosity**: Giving to others in need (2 Corinthians 9:7)

### Conflict Resolution
Even strong families face conflicts. Biblical principles help:

- **Quick Reconciliation**: "Do not let the sun go down on your anger" (Ephesians 4:26)
- **Mediation**: Involving wise counsel when needed
- **Forgiveness**: Following Christ's example of unlimited forgiveness

## Nurturing Children's Faith

### Teaching by Example
Deuteronomy 6:6-7 provides the model: "These commandments that I give you today are to be on your hearts. Impress them on your children. Talk about them when you sit at home and when you walk along the road, when you lie down and when you get up."

### Age-Appropriate Spiritual Training

- **Young Children**: Simple Bible stories and basic prayers
- **School Age**: Deeper Bible study and personal devotions
- **Teenagers**: Challenging spiritual discussions and service opportunities

## Maintaining Strong Marriages

### Mutual Submission
Ephesians 5:21 establishes the principle: "Submit to one another out of reverence for Christ."

### Regular Investment
Strong marriages require consistent effort:

- **Date Nights**: Protecting couple time
- **Open Communication**: Sharing feelings and needs honestly
- **Shared Goals**: Planning and dreaming together
- **Spiritual Unity**: Praying and worshiping together

## Conclusion

Building strong families according to biblical principles isn't about following rules—it's about creating homes where God's love flows freely between family members. As you apply these principles, you'll create a family environment that honors God and provides security, love, and growth for everyone.

Remember, God designed families to reflect His character to the world. Your strong, loving family becomes a powerful testimony of God's grace and design.`,
    author: "Esther Njoroge",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Family",
    image: "/blog-family.jpg",
    likes: 112,
    comments: 28,
    tags: ["Family", "Biblical Principles", "Relationships"]
  },
  {
    id: 4,
    title: "Understanding Sabbath: More Than Just a Day of Rest",
    content: `# Understanding Sabbath: More Than Just a Day of Rest

The Sabbath is one of God's greatest gifts to humanity, offering physical rest, spiritual renewal, and divine fellowship. Understanding its true meaning can transform your relationship with God and enhance your quality of life.

## The Biblical Foundation of Sabbath

### Creation Ordinance
Sabbath began at creation itself: "By the seventh day God had finished the work he had been doing; so on the seventh day he rested from all his work" (Genesis 2:2).

### The Fourth Commandment
God codified Sabbath in the Ten Commandments: "Remember the Sabbath day by keeping it holy" (Exodus 20:8).

### Jesus' Teaching on Sabbath
Jesus clarified that "The Sabbath was made for man, not man for the Sabbath" (Mark 2:27), establishing it as a blessing rather than a burden.

## The Multi-Faceted Blessing of Sabbath

### 1. Physical Rest
Our bodies need regular rest for optimal health:

- **Reduced Stress**: Lowering cortisol and blood pressure
- **Improved Sleep**: Better rest patterns and energy levels
- **Enhanced Immunity**: Stronger resistance to illness
- **Mental Clarity**: Reduced brain fog and improved focus

### 2. Spiritual Renewal
Sabbath provides dedicated time for spiritual refreshment:

- **Deeper Worship**: Unhurried time with God
- **Bible Study**: Extended Scripture meditation
- **Prayer**: Extended communion with God
- **Reflection**: Spiritual self-examination and growth

### 3. Relationship Building
Sabbath strengthens our connections:

- **Family Time**: Uninterrupted fellowship with loved ones
- **Church Community**: Corporate worship and fellowship
- **Friendship Development**: Building spiritual relationships
- **Outreach Opportunities**: Sharing faith with others

### 4. Mental and Emotional Health
Regular Sabbath observance promotes psychological well-being:

- **Anxiety Reduction**: Trusting God's provision
- **Depression Prevention**: Hope and perspective
- **Life Balance**: Healthy work-rest rhythms
- **Purpose Reinforcement**: Remembering what truly matters

## Practical Sabbath Observance

### Preparation is Key
Successful Sabbath enjoyment begins with proper preparation:

- **Physical Prep**: Cooking, cleaning, and organizing beforehand
- **Work Planning**: Completing necessary tasks ahead of time
- **Spiritual Ready**: Heart prepared to receive God's blessings

### Sabbath Activities
Make Sabbath a delight rather than a burden:

#### Worship and Spiritual Focus
- **Church Services**: Corporate worship and teaching
- **Nature Walks**: Enjoying God's creation
- **Family Worship**: Home spiritual activities
- **Bible Reading**: Extended study and meditation

#### Relationship Building
- **Family Meals**: Leisurely dining together
- **Conversation**: Meaningful discussions and sharing
- **Games and Activities**: Fun, wholesome recreation
- **Visiting**: Fellowship with friends and family

#### Rest and Recreation
- **Napping**: Physical rest without guilt
- **Hobbies**: Creative and enjoyable activities
- **Reading**: Inspirational and educational materials
- **Music**: Uplifting and spiritually beneficial

### Avoiding Sabbath Burdens
Remember Jesus' teaching about what makes Sabbath a burden:

- **Legalism**: Avoiding man-made restrictions
- **Business Activities**: Regular work and commerce
- **Anxiety**: Worrying about unfinished tasks
- **Distraction**: Mental engagement with work concerns

## The Deeper Meaning of Sabbath

### A Sign of Relationship
Sabbath is a sign of our covenant relationship with God: "It will be a sign between me and the Israelites forever" (Exodus 31:17).

### Foretaste of Heaven
The rest and peace of Sabbath point us to the ultimate rest we'll have in God's eternal kingdom.

### Trust Exercise
Observing Sabbath builds our faith in God's provision—trusting that six days of work are sufficient with His blessing.

## Making Sabbath Special

### Create Traditions
Develop meaningful Sabbath traditions:

- **Special Meals**: Favorite foods and pleasant atmosphere
- **Family Activities**: Enjoyable, repeatable experiences
- **Memory Making**: Photos and journaling special moments
- **Service Opportunities**: Blessing others on Sabbath

### Adapt to Life Seasons
Different life stages may require different Sabbath approaches:

- **Young Families**: Child-friendly activities and schedules
- **Working Adults**: Intentional unplugging and rest
- **Seniors**: Reflection, mentoring, and legacy building
- **Students**: Study groups and social fellowship

## Conclusion

Sabbath is God's loving gift designed to restore, refresh, and bless His children. It's not about restriction but about freedom—freedom from the tyranny of constant work and pressure to perform.

As you embrace Sabbath fully, you'll discover it's not just about what you DON'T do, but about what you GAIN: deeper relationship with God, stronger family bonds, better health, and a foretaste of the eternal rest awaiting God's people.

Remember the beautiful promise: "There remains, then, a Sabbath-rest for the people of God" (Hebrews 4:9). This weekly gift points us to the ultimate rest we have in Christ.`,
    author: "Pastor James Mwangi",
    date: "2024-03-08",
    readTime: "8 min read",
    category: "Sabbath",
    image: "/blog-sabbath.jpg",
    likes: 203,
    comments: 41,
    tags: ["Sabbath", "Rest", "Spiritual Renewal"]
  },
  {
    id: 5,
    title: "Faith in Action: Serving Our Community",
    content: `# Faith in Action: Serving Our Community

True faith is not just about belief; it's about action. Our church family has been actively serving our community, demonstrating God's love through practical service and outreach programs that make a real difference in people's lives.

## The Biblical Foundation for Service

### Faith Without Works is Dead
James 2:17 provides the clear principle: "In the same way, faith by itself, if it is not accompanied by action, is dead."

### Jesus' Example of Service
Our Savior demonstrated service throughout His ministry:

- **Feeding the Hungry**: Multiplying loaves and fishes (Matthew 14:13-21)
- **Healing the Sick**: Restoring health and dignity (Mark 1:32-34)
- **Teaching the People**: Sharing wisdom and truth (Matthew 5-7)
- **Washing Feet**: Humble service to others (John 13:1-17)

### The Call to Serve
1 Peter 4:10 instructs: "Each of you should use whatever gift you have received to serve others, as faithful stewards of God's grace in its various forms."

## Our Community Service Programs

### Food Distribution Ministry
Every Saturday morning, our team distributes food to families in need:

- **Weekly Reach**: 50-75 families served
- **Nutrition Focus**: Balanced meals with fresh produce
- **Dignity Approach**: Respectful, caring distribution
- **Follow-up Care**: Ongoing support and prayer

### Youth Mentorship Program
We pair adult volunteers with at-risk youth:

- **Academic Support**: Homework help and tutoring
- **Life Skills**: Financial literacy and career guidance
- **Spiritual Guidance**: Bible study and prayer partnership
- **Recreation**: Healthy activities and outings

### Senior Care Outreach
Our church members regularly visit and assist elderly community members:

- **Home Visits**: Companionship and practical help
- **Medical Transportation**: Doctor appointments and pharmacy trips
- **Home Maintenance**: Minor repairs and yard work
- **Spiritual Care**: Prayer and Bible study

### Community Clean-Up Initiatives
Monthly environmental service projects:

- **Neighborhood Beautification**: Trash removal and landscaping
- **Park Maintenance**: Cleaning and improving public spaces
- **Recycling Programs**: Environmental education and action
- **Safety Improvements**: Addressing community hazards

## The Impact of Our Service

### Transformed Lives
We've witnessed remarkable changes through consistent service:

- **Family Stability**: Food security leading to better employment
- **Youth Success**: Improved grades and life choices
- **Senior Wellbeing**: Reduced isolation and better health
- **Community Pride**: Cleaner, safer neighborhoods

### Spiritual Growth in Volunteers
Those who serve experience profound spiritual benefits:

- **Deeper Faith**: Seeing God's provision firsthand
- **Increased Compassion**: Understanding others' struggles
- **Greater Joy**: The blessing of giving
- **Unity Building**: Working together across differences

## How You Can Get Involved

### Assess Your Gifts
Everyone has something valuable to offer:

- **Professional Skills**: Teaching, administration, healthcare
- **Practical Abilities**: Construction, cooking, maintenance
- **Spiritual Gifts**: Prayer, encouragement, teaching
- **Life Experience**: Wisdom, mentoring, support

### Start Small
Service doesn't require grand gestures:

- **One Person**: Regular check-ins with someone lonely
- **One Family**: Adopting a family for ongoing support
- **One Hour**: Weekly commitment to a specific need
- **One Skill**: Using your talents for God's glory

### Join Existing Programs
Plug into established ministries:

- **Sign Up**: Formal volunteer registration
- **Attend Training**: Learn effective service methods
- **Commit Regularly**: Consistent presence builds trust
- **Bring Friends**: Expand the service team

### Create Your Own Initiative
Identify and address needs you see:

- **Observe**: Notice gaps in community support
- **Research**: Understand root causes and solutions
- **Plan**: Develop sustainable approaches
- **Execute**: Start with manageable steps

## The Theology of Service

### Serving Christ Himself
Matthew 25:40 reveals the profound truth: "Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me."

### Stewardship Principle
We serve as managers of God's resources:

- **Time**: Using our hours for eternal impact
- **Talents**: Employing our skills for kingdom purposes
- **Treasure**: Investing our finances in heavenly returns
- **Influence**: Leveraging our relationships for good

### Eternal Perspective
Service stores up treasures in heaven:

- **Character Development**: Becoming more like Christ
- **Relationship Building**: Eternal connections through service
- **Kingdom Advancement**: Participating in God's redemptive work
- **Witness Impact**: Demonstrating the Gospel's reality

## Practical Service Tips

### Sustainable Service
Avoid burnout and maximize impact:

- **Know Your Limits**: Don't overcommit
- **Work in Teams**: Share the load and joy
- **Take Breaks**: Regular rest and reflection
- **Celebrate Progress**: Acknowledge God's work through you

### Cultural Sensitivity
Serve effectively across diverse backgrounds:

- **Listen First**: Understand actual needs before helping
- **Respect Dignity**: Serve with humility and respect
- **Cultural Awareness**: Learn appropriate customs and approaches
- **Build Relationships**: Long-term impact through connection

### Measure Impact
Track the difference you're making:

- **Stories Collected**: Personal testimonies of change
- **Metrics Tracked**: Quantitative measures of service
- **Lessons Learned**: Continuous improvement insights
- **God Moments**: Documenting divine appointments

## Conclusion

Service is the natural outflow of authentic faith—it's where belief becomes tangible and love becomes visible. When we serve our community, we're not just helping people; we're partnering with God in His redemptive work.

Remember Jesus' words: "Let your light shine before others, that they may see your good deeds and glorify your Father in heaven" (Matthew 5:16). Your service becomes a beacon pointing others to God's love and grace.

As you step out in faith through service, you'll discover the paradoxical truth: in giving, we receive; in serving, we're served; in losing our lives, we find them.`,
    author: "Michael Ochieng",
    date: "2024-03-05",
    readTime: "4 min read",
    category: "Community Service",
    image: "/blog-service.jpg",
    likes: 67,
    comments: 12,
    tags: ["Service", "Community", "Outreach"]
  },
  {
    id: 6,
    title: "Youth Ministry: Empowering the Next Generation",
    content: `# Youth Ministry: Empowering the Next Generation

Investing in our youth is investing in the future of the church. Our comprehensive youth ministry program is designed to help young people develop strong faith, leadership skills, and meaningful relationships that will serve them throughout their lives.

## The Biblical Foundation for Youth Ministry

### Jesus' Love for Children
Our Savior demonstrated special care for young people: "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these" (Matthew 19:14).

### The Great Commission's Youth Focus
The gospel mandate includes reaching the next generation: "Go and make disciples of all nations... teaching them to obey everything I have commanded you" (Matthew 28:19-20).

### Timothy's Example
Paul's mentorship of young Timothy shows the biblical model: "I am reminded of your sincere faith, which first lived in your grandmother Lois and in your mother Eunice and, I am persuaded, now lives in you also" (2 Timothy 1:5).

## Our Youth Ministry Philosophy

### Holistic Development
We address every aspect of a young person's life:

- **Spiritual Formation**: Deepening faith and biblical understanding
- **Character Development**: Building integrity, responsibility, and leadership
- **Social Skills**: Healthy relationships and communication
- **Academic Support**: Educational excellence and life skills
- **Service Opportunities**: Living out faith through action

### Age-Appropriate Approaches
Different developmental stages require different strategies:

#### Early Childhood (Ages 3-7)
- **Play-Based Learning**: Biblical stories through games and activities
- **Foundation Building**: Basic Bible verses and simple prayers
- **Parent Partnership**: Equipping families for spiritual training

#### Elementary (Ages 8-12)
- **Bible Knowledge**: Deeper Scripture study and memorization
- **Character Traits**: Developing Christian virtues and values
- **Friendship Skills**: Healthy peer relationships and boundaries

#### Middle School (Ages 13-15)
- **Identity Formation**: Understanding who they are in Christ
- **Peer Pressure**: Making wise choices in challenging environments
- **Spiritual Disciplines**: Personal prayer and Bible study habits

#### High School (Ages 16-18)
- **Leadership Development**: Serving in ministry capacities
- **Life Preparation**: College, career, and relationship guidance
- **Apologetics**: Defending and sharing their faith

## Our Youth Programs

### Sabbath School
Weekly spiritual education for all ages:

- **Bible Study**: Age-appropriate Scripture exploration
- **Memory Verses**: Building spiritual foundation
- **Discussion Groups**: Interactive learning and application
- **Activities**: Games, crafts, and service projects

### Youth Fellowship
Regular gatherings for connection and growth:

- **Friday Night Youth**: Worship, teaching, and social time
- **Small Groups**: Intensive discipleship and accountability
- **Retreats**: Spiritual intensive experiences
- **Social Events**: Fun, wholesome activities

### Leadership Training
Developing young leaders for church and community:

- **Youth Council**: Planning and leadership opportunities
- **Mentorship Programs**: Older youth guiding younger ones
- **Teaching Assistants**: Helping in Sabbath School classes
- **Service Projects**: Leading community outreach initiatives

### Summer Programs
Special seasonal opportunities:

- **Youth Camp**: Week-long spiritual growth experience
- **Mission Trips**: Cross-cultural service and learning
- **Sports Camps**: Physical development and teamwork
- **Arts Programs**: Creative expression and skill development

## Spiritual Formation Strategies

### Biblical Literacy
Helping youth understand and apply Scripture:

- **Storytelling**: Engaging biblical narratives
- **Discussion Methods**: Interactive learning and questions
- **Life Application**: Connecting Bible to daily decisions
- **Memorization**: Hiding God's Word in their hearts

### Prayer Development
Teaching young people to communicate with God:

- **Model Prayer**: Leaders demonstrate and guide prayer
- **Journaling**: Personal prayer recording and reflection
- **Prayer Partners**: Peer accountability and support
- **Answered Prayers**: Celebrating God's faithfulness

### Worship Participation
Involving youth in corporate worship:

- **Youth Choir**: Musical expression and leadership
- **Drama Ministry**: Creative biblical storytelling
- **Testimony Sharing**: Public speaking and witness
- **Service Leading**: Participating in church programs

## Building Healthy Relationships

### Peer Relationships
Guiding positive friendships:

- **Social Skills**: Communication and conflict resolution
- **Group Dynamics**: Understanding healthy group interactions
- **Dating Principles**: Biblical guidelines for romantic relationships
- **Digital Citizenship**: Wise online behavior and boundaries

### Family Connections
Strengthening parent-youth relationships:

- **Family Worship**: Resources for home spiritual activities
- **Parent Workshops**: Equipping parents for youth challenges
- **Communication Tools**: Bridging generational gaps
- **Family Activities**: Intergenerational fellowship events

### Mentorship Programs
Connecting youth with mature believers:

- **One-on-One Mentoring**: Personal guidance and support
- **Career Mentoring**: Professional and vocational advice
- **Spiritual Mentoring**: Faith development and discipleship
- **Life Skills**: Practical wisdom and training

## Addressing Modern Challenges

### Mental Health and Wellness
Supporting emotional and psychological health:

- **Counseling Resources**: Professional Christian counseling
- **Support Groups**: Safe spaces for sharing struggles
- **Stress Management**: Biblical coping strategies
- **Crisis Intervention**: Emergency support and care

### Digital Navigating
Guiding wise technology use:

- **Social Media Training**: Online safety and witness
- **Screen Time Balance**: Healthy technology habits
- **Digital Discernment**: Evaluating content biblically
- **Online Relationships**: Safe and appropriate connections

### Cultural Pressures
Equipping youth to stand firm:

- **Identity Formation**: Biblical self-understanding
- **Peer Pressure**: Strategies for wise choices
- **Substance Abuse**: Prevention and support
- **Values Clarification**: Christian ethics and morality

## Measuring Success

### Spiritual Indicators
Tracking spiritual growth and development:

- **Bible Knowledge**: Regular assessment and celebration
- **Prayer Life**: Consistency and depth of communication
- **Service Involvement**: Regular participation in ministry
- **Leadership Growth**: Taking on increasing responsibility

### Life Impact
Long-term transformation evidence:

- **Educational Achievement**: Academic performance and goals
- **Character Development**: Observable virtue and integrity
- **Relationship Quality**: Healthy interactions and boundaries
- **Future Planning**: College, career, and life direction

### Church Integration
Ongoing connection to the church family:

- **Attendance Patterns**: Regular involvement in worship and programs
- **Leadership Roles**: Serving in various capacities
- **Peer Influence**: Bringing friends to youth activities
- **Family Impact**: Positive influence on siblings and parents

## How You Can Support Youth Ministry

### Prayer Support
Lifting up the next generation in prayer:

- **Specific Prayers**: For individual youth by name
- **Leadership Prayer**: For wisdom and guidance for youth leaders
- **Family Prayer**: Supporting parents and homes
- **Protection Prayer**: Safety and spiritual covering

### Volunteer Involvement
Adults can make a significant difference:

- **Small Group Leaders**: Facilitating youth Bible studies
- **Event Volunteers**: Helping with programs and activities
- **Mentors**: Investing in individual young people
- **Prayer Partners**: Supporting youth through intercession

### Resource Provision
Meeting practical needs:

- **Financial Support**: Funding programs and scholarships
- **Facility Use**: Providing spaces for activities
- **Transportation**: Helping with logistics and safety
- **Food Service**: Supporting meetings and events

### Advocacy and Encouragement
Championing youth in the church:

- **Voice in Leadership**: Ensuring youth perspectives heard
- **Program Support**: Attending and promoting youth events
- **Intergenerational Bridge**: Connecting youth with entire church
- **Celebration of Achievements**: Recognizing growth and milestones

## Conclusion

Youth ministry is not just about keeping young people busy—it's about investing in eternal souls and developing the next generation of Christian leaders. As we pour into our youth, we're participating in God's redemptive work and building the future of His church.

Remember the promise: "Train up a child in the way he should go; even when he is old he will not depart from it" (Proverbs 22:6). Our investment today yields eternal dividends tomorrow.

Whether you're a parent, youth leader, or church member, your involvement in youth ministry matters. Together, we can help this generation discover their purpose, develop their gifts, and change their world for Christ.`,
    author: "David Kimani",
    date: "2024-03-03",
    readTime: "5 min read",
    category: "Youth",
    image: "/blog-youth.jpg",
    likes: 94,
    comments: 18,
    tags: ["Youth", "Leadership", "Next Generation"]
  }
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3)

  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1)
      setIsLiked(false)
    } else {
      setLikeCount(likeCount + 1)
      setIsLiked(true)
    }
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      })
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 bg-gradient-to-br from-teal-600 to-cyan-600">
          <div className="absolute inset-0">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-center text-white">
              <div className="mb-4">
                <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center justify-center gap-6 text-teal-100">
                <span className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    {post.content.split('\n').map((paragraph, index) => {
                      if (paragraph.startsWith('#')) {
                        return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-8 first:mt-0">{paragraph.substring(1).trim()}</h2>
                      } else if (paragraph.startsWith('##')) {
                        return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">{paragraph.substring(2).trim()}</h3>
                      } else if (paragraph.startsWith('###')) {
                        return <h4 key={index} className="text-lg font-semibold text-gray-900 mb-2 mt-4">{paragraph.substring(3).trim()}</h4>
                      } else if (paragraph.startsWith('-')) {
                        return <li key={index} className="ml-4 mb-2">{paragraph.substring(1).trim()}</li>
                      } else if (paragraph.trim()) {
                        return <p key={index} className="mb-4 leading-relaxed text-gray-700">{paragraph}</p>
                      }
                      return null
                    })}
                  </div>

                  {/* Tags */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Engagement Bar */}
              <Card className="border-0 shadow-lg mt-6">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <button
                        onClick={handleLike}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                          isLiked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                      >
                        <Heart className={cn("h-5 w-5", isLiked && "fill-current")} />
                        {likeCount}
                      </button>
                      <button
                        onClick={() => setIsBookmarked(!isBookmarked)}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                          isBookmarked ? "bg-teal-100 text-teal-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                      >
                        <Bookmark className={cn("h-5 w-5", isBookmarked && "fill-current")} />
                        {isBookmarked ? "Saved" : "Save"}
                      </button>
                    </div>
                    <button
                      onClick={handleShare}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                    >
                      <Share2 className="h-5 w-5" />
                      Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Card */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{post.author}</h3>
                  <p className="text-gray-600 text-sm mb-4">Spiritual Writer & Speaker</p>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p>15+ Articles Published</p>
                    <p>1.2K Followers</p>
                    <p>Member since 2020</p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Posts */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block group">
                        <div className="flex gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <div className="flex items-center gap-3 text-xs text-gray-500">
                              <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                              <span>{relatedPost.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Connected</h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    Get more inspiring articles delivered to your inbox
                  </p>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent mb-3"
                  />
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    Subscribe to Newsletter
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
