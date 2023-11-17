import { PiCertificateLight } from "react-icons/pi";
import {FaHandsHoldingChild} from 'react-icons/fa6'
import {FaArrowUpRightDots} from 'react-icons/fa6'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {RiHandbagLine} from 'react-icons/ri'
import { FaCheck } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";


// Import Home Team Imgs
import team1 from '../src/assests/team-1.png'
import team2 from '../src/assests/team-2.png'
import team3 from '../src/assests/team-3.png'

// Import Home Features Imgs
import grade1 from '../src/assests/grade-1.png'
import grade2 from '../src/assests/grade-2.png'
import grade3 from '../src/assests/grade-3.png'
import grade4 from '../src/assests/grade-4.png'
import grade5 from '../src/assests/grade-5.png'

// Import Home Partners Imgs
import part1 from '../src/assests/partner-1.png'
import part2 from '../src/assests/partner-2.png'
import part3 from '../src/assests/partner-3.png'
import part4 from '../src/assests/partner-4.png'
import part5 from '../src/assests/partner-5.png'

// Import Memberships Plans Imgs
import plan1 from '../src/assests/MemberShip/price__1.png'
import plan2 from '../src/assests/MemberShip/price__2.png'
import plan3 from '../src/assests/MemberShip/price__2.png'


export const evidence = [
    {
        id: 1,
        title: 'Great Schools Made by Great Teachers',
        desc: 'The quality of an education system cannot exceed the quality of its teachers. (McKinsey, 2007).All the evidence from different education systems around the world shows that the most important factor in determining how well children do is the quality of teachers and teaching.“What is the most important school related factor in student learning? The answer is teaching” said Professor Bob Schwartz (Harvard GSE, 2010).There is a consensus that improving teaching quality is one of the most direct and promising strategies for improving education outcomes. Every aspect of school reform depends on highly skilled teachers for its success.'
    },
    {
        id: 2,
        title: 'Where to Invest?',
        desc: 'Reducing class sizes from 23 to 15 students improves the performance of an average student by eight percentile points at best. Class size has no major impact on quality of education. It is expensive and not worth investing in it.One study shows that if two average eight-year-old students were given different teachers – one of them a high performer, the other a low performer – their performance diverge by more than 50 percentile points within three years.Pivoting your expenditure from less cost-effective to more cost-effective ways of achieving the same objectives.'
    },
    {
        id: 3,
        title: 'Great Teachers - How to Make Them?',
        desc: 'Teacher performance in the classroom is the lifeblood of the educational enterprise. Thus systems or processes for measuring teaching have been increasingly recognized as an important part of the instructional improvement exercise. Three key questions: <ul> <li>What do teachers need to do next to get better at teaching? </li> <li>How will teachers do it – what support, resources and help is needed?</li> <li>How will we know whether they have improved?</li> </ul> Smart Teaching System® answers all these questions… ',
    }

]

export const serviceCards = [
    {
        id: '01',
        icon: <FaArrowUpRightDots className='service-icon'/>,
        title: '"Expert Teacher" <br/> training program',
        desc: 'Find out what a profession is and what it is not <br/>The Master Educator program provides you with a proven educational structure and resources, allowing you to discover what makes this profession exciting and challenging, and how to find success as a professional educator. You will be able to adopt reliable and proven strategies, while formulating your own solutions to challenges.'
    },
    {
        id: '02',
        icon: <FaHandsHoldingChild className='service-icon'/>,
        title: 'The most effective evidence-based teaching strategies',
        desc: 'Find out what a profession is and what it is not <br/> The Master Educator program provides you with a proven educational structure and resources, allowing you to discover what makes this profession exciting and challenging, and how to find success as a professional educator. You will be able to adopt reliable and proven strategies, while formulating y'
    },
    {
        id: '03',
        icon: <HiOutlineLightBulb className='service-icon'/>,
        title: 'The most effective evidence-based teaching strategies',
        desc: 'Teachers are always looking to innovate. But what really matters more than “always try something new” is why we do what we do.<br/> <br/> This leads to educational research findings that student outcomes are linked to many highly effective classroom practices, i.e. maximizing impact on learning.'
    },
    {
        id: '04',
        icon: <RiHandbagLine className='service-icon'/>,
        title: 'Rich tools and resources',
        desc: 'We offer a wide range of teacher tools and resources designed for professional development that will assist teachers in their classrooms. Our tools for teachers are engaging so teachers can easily integrate them into their practice. These tools will help teachers save money while making purchases for themselves or their students.<br/> We are constantly working to find and create the best free resources for our '
    }
]

export const homeTeam = [
    {
        src: team1,
        title: 'INTERIOR DESIGNER',
        name: 'Mirnsdo Jons'
    },
    {
        src: team2,
        title: 'INTERIOR DESIGNER',
        name: 'Daniel Rock'
    },
    {
        src: team3,
        title: 'INTERIOR DESIGNER',
        name: 'Sajid Mustahidul'
    },
    {
        src: team1,
        title: 'INTERIOR DESIGNER',
        name: 'Mirnsdo Jons'
    },
    {
        src: team2,
        title: 'INTERIOR DESIGNER',
        name: 'Daniel Rock'
    },
    {
        src: team2,
        title: 'INTERIOR DESIGNER',
        name: 'Sajid Mustahidul'
    },
    {
        src: team1,
        title: 'INTERIOR DESIGNER',
        name: 'Mirnsdo Jons'
    },
]

export const homeFeatures = [
    {
        Img: grade1,
        title: 'Development Courses',
        no: '21 Courses'
    },
    {
        Img: grade2,
        title: 'Free Books',
        no: '121 Books'
    },
    {
        Img: grade3,
        title: 'Research and Reports',
        no: '52 Research and Reports'
    },
    {
        Img: grade4,
        title: 'Educational Standards',
        no: '21 Courses'
    },
    {
        Img: grade5,
        title: 'Educational Fourm',
        no: '21 Courses'
    },
]

export const partners = [
    {
        img: part1
    },
    {
        img: part2
    },
    {
        img: part3
    },
    {
        img: part4
    },
    {
        img: part5
    }
]


export const loginInputField = [
    {
        inputType: 'text',
        inputName: 'Email',
        field: 'email'
    },
    {
        inputType: 'password',
        inputName: 'Password',
        field: 'password'
    }
]


export const MemeberShipTypesData = [
    {
        head: 'FREE Teacher Membership',
        lists: [

        { icon: <FaCheck />,
            list: 'Become a part of the Smart Teaching education community by signing up for your FREE Teacher membership',
        },
        {
            icon: <FaCheck />,
            list: 'Access to hundreds of courses, tools, forms, worksheets, articles and printable materials and programs to enhance your life and your career.'


        }
        ]
    },
    {
        head: 'Expert Teacher Membership',
        lists: [

        { icon: <FaCheck />,
            list: 'Expert Membership is for teachers, supervisors, administrators, and other education professionals who registers in the Smart Teaching Professional Development Programme',
        }
        ]
    },
    {
        head: 'School Membership',
        lists: [

        { icon: <FaCheck />,
            list: 'School Members are organisations that view Smart Teaching System as a strategic platform. This includes Educational Institutions of all sizes and types including schools, colleges, universities, and training providers',
        },
        {
            icon: <FaCheck />,
            list: 'School Membership will allow all teachers unlimited access to the site.'
        }
        ]
    }
]

export const JoinOurCommunity = [
    {
        icon: <FaCheck />,
        desc: 'STS offers you the best in resources and support materials to help deepen your understanding of successful teaching, assessment, and evaluation practices. Our teacher-centred professional resources will help you zero in on the key issues confronting you and your students in today’s classrooms.'
    },
    {
        icon: <FaCheck />,
        desc: 'Foster mutual support and engagement through powerful resources for driving teacher and school improvement.'
    },
    {
        icon: <FaCheck />,
        desc: 'Join and participate in the STS Working Groups, industry collaborations that develop teaching professionalism and educational opportunities.'
    },
    {
        icon: <FaCheck />,
        desc: 'Use the STS member logo on your own site and have your logo listed on our members’ page and in other promotional material.'
    }
]

export const BenefitCards = [
    {
        id: '01',
        icon: <FaArrowUpRightDots className="benefit-icon"/>,
        head: 'Boost Your <br/> Knowledge and Skills',
        lists: [
            {
                list: 'up to 50% discounts on our STS Expert Teacher programmes and events including seminars, workshops, on-site training, and self-study courses.'
            },
            {
                list: 'Free access to Research reports and case studies conducted by other members in the profession.'
            },
            {
                list: 'Free access to a high quality Competency assessment model.'
            },
            {
                list: '​​Access to wide range of essential tools and resources.'
            }
        ]
    },
    {
        id: '02',
        icon: <FaUsers className="benefit-icon"/>,
        head: 'Stay Connected',
        lists: [
            {
                list: 'Grow your personal and professional support system.'
            },
            {
                list: '​Expand your network and professional presence by participating in the network groups.'
            },
            {
                list: '​Build strong connections while learning best practices.'
            },
            {
                list: 'Share your expertise by your case studies and articles in the smart Teaching platform.'
            },
            {
                list: '​​Gain new ideas, best practices, and industry news through networking.'
            }
        ]
    },
    {
        id: '03',
        icon: <PiCertificateLight className="benefit-icon"/>,
        head: 'Gain More Confidence',
        lists: [
            {
                list: 'The Expert Teacher certifications is the most prestigious in the teaching industry.'
            },
            {
                list: 'Receive training, professional recognition, and opportunities for continued growth that is difficult to get elsewhere.'
            },
            {
                list: 'Opportunities to showcase your teaching skills and expertise by speaking at conferences and events and contributing to industry and professional publications.'
            }
        ]
    }
]

export const memberShipLinks = [
    {
        link: 'Organizations that join the STS'
    },
    {
        link: 'Benefits of membership'
    },
    {
        link: 'Training'
    },
    {
        link: 'Assessments'
    },
    {
        link: 'Resources'
    },
    {
        link: 'Networking'
    },
    {
        link: 'Groups',
    },
    {
        link: 'Members of Smart Teaching System'
    }
]

export const membershipsPlans = [
    {
        id: 0,
        head: 'FREE Teacher <br/> membership',
        img: plan1,
        cost: 0,
        title: 'FREE Teacher membership',
        lists: [
            {
                list: 'Membership provides many opportunities to interact and exchange ideas with teachers, educationalists, researchers and a wide range of high-profile education events.'
            },
            {
                list: 'Increase your knowledge and skills and advance your career to the next level with our professional development tools and resources.'
            },
            {
                list: 'Meet, communicate and collaborate with your peers within the education community through a variety of networking opportunities'
            },
            {
                list: 'Strengthen your skills and capacities whether you are a school director, a school manager, a teacher, educator, or provide administration support.'
            }
        ]
    },
    {   
        id: 1,
        head: 'Expert Teacher <br/> Membership',
        img: plan2,
        cost: 8,
        title: 'Expert Teacher Membership',
        lists: [
            {
                list: 'Expert Membership is for teachers, supervisors, administrators, and other education professionals who registers in the Smart Teaching Professional Development Programme.'
            },
            {
                list: 'Expert membership package provides many opportunities to interact and exchange ideas with teachers, educationalists, researchers and a wide range of education tools and resources.'
            },
            {
                list: 'Expert Teacher Membership is one of the best professional development investments you can make.'
            },
            {
                list: 'Allows one user to unlimited access to all resources on the site. Only $8per month!'
            }
        ]
    },
    {   
        id: 2,
        head: 'Institutional <br/> Membership',
        img: plan3,
        cost: 4,
        title: 'Institutional Membership',
        lists: [
            {
                list: 'School membership is an organisational membership giving teachers access to our dedicated School Members Area, incorporating our educational resources, assessment tools, research materials and case studies.'
            },
            {
                list: 'School Membership is open to any school interested in developing and improving teaching practices'
            },
            {
                list: 'Use the STS member logo on your own site and have your logo listed on our members’ page and in other promotional material.'
            }
        ]
    }
]


export const benefitsDetails = [
    {
        title : 'Home',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Smart Teaching System',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Factors Affecting Student Achievement',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Expert Teacher',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Academy',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Individual Professional Development Plan',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Assessments',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Classroom Observation Instruments',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Students Rating their Teachers',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Simplified Teachers Competency Assessment',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Teacher Competency Assessment (Self)',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Teacher Competency Assessment (Superior)',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Resources',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Articles (Read)',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Articles (Read and comment)',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Library (Access to Free Courses)',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Introduction to STS (Arabic)',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Membership',
        cases: [
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Expert Teacher Training Programme',
        cases: [
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'Expert Teacher Certification',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'School Projects',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
        ]
    },
    {
        title: 'School Advertising',
        cases: [
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: false,
            },
            {
                case: true,
            },
        ]
    },

]


