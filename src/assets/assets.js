import appointment_img from './appointmentfemale.png'
import header_img from './doctor3image.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profileimg.png'
import contact_image from './doctorpatient.png'
import about_image from './indiandoctorcouple.png'
import logo from './cureconnect_logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './new_docC.jpg'
import doc2 from './indianfemdoc.png'
import doc3 from './indiandocmale1.png'
import doc4 from './indiandocmale2.png'
import doc5 from './indandocfemale2.png'
import doc6 from './indianmaledoc3.png'
import doc7 from './indiandocmale4.png'
import doc8 from './indiandocfemale3.png'
import doc9 from './indianfemdoc5.png'
import doc10 from './indiandocmale6.png'
import doc11 from './indiandocmale8.png'
import doc12 from './indiandocmale7.png'
import doc13 from './indianmaledoc8.png'
import doc14 from './indianmaledoc10.png'
import doc15 from './indianfemaledoc6.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Ramesh Kumar',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kumar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: 'Cannaught Palace',
            line2: 'New Delhi, Delhi'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sumbul Khabra',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Khabra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1100,
        address: {
            line1: 'Sector 12, Palm Avenue',
            line2: 'Andheri West, Mumbai, MH'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarvesh Kumar',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Sarvesh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 3000,
        address: {
            line1: 'Raja Bazaar',
            line2: 'New Delhi, Delhi'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Aarav Mehta',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Aarav has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1400,
        address: {
            line1: '14th Cross Road, Green Park',
            line2: 'Koramangala, Bengaluru, Karnataka',
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Archana Singh',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Archana has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: '12-4/3, Lake View Colony',
            line2: 'Gachibowli, Hyderabad, TS'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Milind Khule',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Milind has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 2500,
        address: {
            line1: 'Plot No. 78, Orchid Street',
            line2: 'Anna Nagar, Chennai, TN'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Ishaan Khurana',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Khurana has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'F-112, Royal Residency',
            line2: 'Malviya Nagar, Jaipur, RJ'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Riya Thapad',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Riya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1600,
        address: {
            line1: '22 Parkside Enclave',
            line2: 'Gomti Nagar, Lucknow, UP'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Shreya Kulshreshtha',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Shreya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 3000,
        address: {
            line1: 'Green Valley Apartments',
            line2: 'Salt Lake, Kolkata, WB'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Samar Bhatia',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Samar has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1400,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Devansh Mehra',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Mehra has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1500,
        address: {
            line1: 'A-29 Shivalik Colony',
            line2: 'Malviya Nagar, New Delhi'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Kabir Anand',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Kabir has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: 'A-Block, Sushant Lok',
            line2: 'Phase 5, Gurgaon, Haryana'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Adhiraj Bansal',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Bansal has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 5000,
        address: {
            line1: '97 Sunrise Apartments',
            line2: 'Dwarka Sector 10, New Delhi'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Veer Rajput',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Veer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Veer Rajput has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 1600,
        address: {
            line1: 'J-12, Central Market Road, Sector 12',
            line2: 'Lajpat Nagar II, New Delhi'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Neelima Godara',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Neelima has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 3000,
        address: {
            line1: 'Emerald Greens Society, Ahmedabad',
            line2: 'Sector 83, Gurgaon'
        }
    },
]