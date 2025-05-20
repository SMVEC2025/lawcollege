import { IMenu, IMenuDT2 } from "@/types/menu-d-t";

const menu_data: IMenu[] = [
	// {
	// 	id: 1,
	// 	title: 'Home',
	// 	link: '/',

	// },
	// {
	// 	id: 2,
	// 	title: 'academics',
	// 	link: '#',
	// 	sm_mega_menus: [
	// 		{ id: 1, title: "Overview", link: "/university-admission-overview" },
	// 		{ id: 2, title: "Undergraduate", link: "/university-program" },
	// 		{ id: 3, title: "Graduate Program", link: "/university-program" },
	// 		{ id: 4, title: "Schools", link: "/university-program" },
	// 		{ id: 5, title: "Online Education", link: "/course-with-filter" },
	// 		{ id: 6, title: "Off-campus learning", link: "/course-with-filter" },
	// 		{ id: 7, title: "Faculty", link: "/university-leadership" },
	// 	]
	// },
	// {
	// 	id: 3,
	// 	title: 'Admissions',
	// 	link: '#',
	// 	dropdown_menus: [
	// 		{ id: 1, title: "Overview", link: "/university-admission-overview" },
	// 		{ id: 2, title: "How to Apply", link: "/university-apply" },
	// 		{ id: 3, title: "Tuition & Fees", link: "/university-tuition-fees" },
	// 		{ id: 4, title: "Financial Aid", link: "/university-financial" },
	// 		{ id: 5, title: "Dates & Deadlines", link: "/university-deadlines" },
	// 		{ id: 6, title: "Schedule a Tour", link: "/university-schedule" },
	// 	]
	// },
	// {
	// 	id: 4,
	// 	title: 'Pages',
	// 	link: '#',
	// 	pages_dropdown: [
	// 		{
	// 			id: 1,
	// 			title: "About",
	// 			dropdown_menus: [
	// 				{ id: 1, title: "About Us", link: "/about" },
	// 				{ id: 2, title: "University About", link: "/university-about" },
	// 				{ id: 3, title: "Campus", link: "/university-campus" },
	// 				{ id: 4, title: "Mission & Values", link: "/university-mission" },
	// 				{ id: 5, title: "History", link: "/university-history" },
	// 				{ id: 6, title: "Our Leadership", link: "/university-leadership" },
	// 			],
	// 		},
	// 		{
	// 			id: 2,
	// 			title: "Get Started",
	// 			dropdown_menus: [
	// 				{ id: 1, title: "Events", link: "/event" },
	// 				{ id: 2, title: "Event Details", link: "/event-details" },
	// 				{ id: 3, title: "", link: "/" },
	// 				{ id: 4, title: "Profile", link: "/my-profile" },
	// 				{ id: 5, title: "Become a ", link: "/become-" },
	// 				{ id: 6, title: "Maintenance", link: "/up-coming" },
	// 				{ id: 7, title: "Contact Us", link: "/contact" },
	// 				{ id: 8, title: "Membership plans", link: "/membership-plans" },
	// 				{ id: 9, title: "FAQs", link: "/faq" },
	// 				{ id: 10, title: "Privacy Policy", link: "/privacy-policy" },
	// 				{ id: 11, title: "404 Page", link: "/not-found" },
	// 			],
	// 		},
	// 		{
	// 			id: 3,
	// 			title: 'Shop',
	// 			dropdown_menus: [
	// 				{ id: 1, title: "Shop", link: "/shop-grid" },
	// 				{ id: 2, title: "Single Product", link: "/shop-details/1" },
	// 				{ id: 3, title: "Cart Page", link: "/cart" },
	// 				{ id: 4, title: "Wishlist page", link: "/wishlist" },
	// 				{ id: 5, title: "My Account", link: "/my-account" },
	// 				{ id: 6, title: "Login & Register", link: "/login" },
	// 			]
	// 		}
	// 	]
	// },
	// {
	// 	id: 5,
	// 	title: 'Blog',
	// 	link: '#',
	// 	dropdown_menus: [
	// 		{ id: 1, title: "Blog 3 Column", link: "/blog-stories" },
	// 		{ id: 2, title: "Blog Grid Sidebar", link: "/blog-stories-sidebar" },
	// 		{ id: 3, title: "Blog List Sidebar", link: "/blog-list" },
	// 		{ id: 4, title: "Blog Standard", link: "/blog-standard" },
	// 		{ id: 5, title: "Blog Details", link: "/blog-details/1" },
	// 		{ id: 6, title: "Blog Details Full Width", link: "/blog-details-full-width/1" },
	// 	]
	// }










];

export default menu_data;


// menu data 2
export const menu_data_2: IMenuDT2[] = [
	{
		id: 1,
		title: 'Home',
		link: '/',

	},
	{
		id: 2,
		title: 'Academics',
		link: '#',
		dropdown_menus: [
			{ id: 1, title: "Faculty", link: "/instructor" },
			{ id: 3, title: "Programs", link: "/university-program" },

		]

	},
	{
		id: 3,
		title: 'Admission',
		link: '#',
		dropdown_menus: [
			{ id: 1, title: "Admission", link: "/university-admission-overview" },
			{ id: 2, title: "How to Apply", link: "/university-apply" },
			{ id: 3, title: "Enquire Now", link: "/university-application-form" },
		
		]

	},
	{
		id: 4,
		title: 'campus',
		link: '#',
		dropdown_menus: [
			{ id: 1, title: "Events", link: "/event" },
			{ id: 2, title: "Campus", link: "/university-campus" },

		]

	},
	{
		id: 5,
		title: 'About',
		link: '#',
		dropdown_menus: [
			{ id: 2, title: "About us", link: "/university-about" },
			{ id: 4, title: "History", link: "/university-history" },
		],

	},
	{
		id: 6,
		title: 'More',
		link: '#',
		dropdown_menus: [

			{ id: 1, title: "Contact Us", link: "/contact" },
			{ id: 2, title: "FAQs", link: "/faq" },
			{ id: 3, title: "Privacy Policy", link: "/privacy-policy" },
		]
	}


	// {
	// 	id: 6,
	// 	title: 'Blog',
	// 	link: '#',
	// 	dropdown_menus: [
	// 		{ id: 1, title: "Blog 3 Column", link: "/blog-stories" },
	// 		{ id: 2, title: "Blog Grid Sidebar", link: "/blog-stories-sidebar" },
	// 		{ id: 3, title: "Blog List Sidebar", link: "/blog-list" },
	// 		{ id: 4, title: "Blog Standard", link: "/blog-standard" },
	// 		{ id: 5, title: "Blog Details", link: "/blog-details/1" },
	// 		{ id: 6, title: "Blog Details Full Width", link: "/blog-details-full-width/1" },
	// 	]
	// }
]