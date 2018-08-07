<template>
	<div class="resume">

		<div class="hero-banner"></div>

		<div class="container">
			<div class="aligned-container">
				<div class="name-and-stuff">
					<h2>Jon Smoley</h2>
					<h4>Software Engineer</h4>
				</div>

				<Intro></Intro>

				<h3>SKILLS</h3>

				<Skills></Skills>

				<h3>EDUCATION</h3>

				<Education></Education>

				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>
				<p>what</p>

			</div>
		</div>

		<!--
		<div class="about-me">
			<h3>A little about me</h3>
			<h4>I've been an enginner, a coach and everythign else in between, whatever that is.  This is just filler so that I can fill up this space.</h4>
		</div>

		<h3>Experience</h3>

		<p>Full-Stack Software Engineer – Freedom Consulting Group	8/14 – Present Redesigned & maintained JavaScript record management web application on CentOS VM using Bash, Visual Studio Code, the MEAN stack (MongoDB, ExpressJS, AngularJS, and NodeJS), the Atlassian Tool Suite (Jira, BitBucket, Confluence), OpenShift, SCSS, and GitLab. Implemented technologies such as Gulp, Mongoose, Lodash, Font Awesome, Bootstrap, jQuery, PhantomJS, Browsersync, and Karma. On separate project: Developed & maintained large Java case management web application on CentOS VM using Bash, Eclipse, and JBoss. Included frameworks and tools such as Maven, Junit, Selenium, Java Server Faces (JSF), XHTML, and Icefaces. Managed version control and code review with Subversion, Redmine, Review Board, Jenkins, and SharePoint. Documented several Setup, “Getting Started”, and informational wikis on Redmine. Reported 102+ issues on Redmine, and resolved 57+ issues on Review Board. Performed System Integration testing on upcoming releases and responded to System Test team inquiries. Assisted with Help Desk and Life Cycle Support, answering queries and tracking user support requests. Discussed and critiqued Technical Design Review documents during team meetings.</p>

		<p>Software Engineer Intern – Freedom Consulting Group	6/13 – 8/14 Studied & implemented ETL / GIS technologies such as the Pentaho Suite and PostGIS on CentOS and Ubuntu VMs. Initialized PostgreSQL database on CentOS VM to communicate with server running Pentaho Suite. Used PostGIS to store metadata, tables, and ESRI shape files to be queried and rendered as a GUI. Developed ETL project which used web services (JSON / XML) to retrieve weather data from NOAA. Created wiki pages, tracked information, and managed setup guides crucial to project in Redmine. Used PuTTY and Bash for SSHing and navigating to servers, to include Cloudera (Hadoop) and CentOS, and used WinSCP as an FTP client.</p>

		<p>Android Mobile Device Developer - Freelance	5/13 – 8/13 Mood Rain – 100,000+ downloads; 4.6/5.0 average rating from 5,145+ reviews on Google Play (not currently available). Provided Android device application development for  a variety of commercial and business clients. Implemented responsive design for both tablets and phones. Integrated libraries like Zebra Crossing (zxing) for barcode scanning. Met with clients on many occasions to discuss requirements, critiques, and extra features.</p>

		<p>Lead Mobile Application Developer – Towson University	3/13 – 8/14 Developed Android application: Wavyleaf, for Towson University’s Biology department. Integrated libraries and tools such as ActionBar Sherlock (4.2) and Google Play Services libraries. Consulted with iOS team to establish consistencies between iOS and Android. Met with client during weekly sprints in Agile environment to discuss progress, goals, and future sprints. Drafted presentation documents for approval by University board. Conferred with Scrum master to schedule tasks for weekly sprints.</p>

		<p>IT Help Desk Technician – Davis & Elkins College	2/10 – 5/10 Provided computer troubleshooting and support for campus IT desk user support tickets. Repaired Ethernet ports / cables, splicing of Cat. 5e Ethernet cables. Performed hardware and software installation, troubleshooting, upgrades, and repairs.</p>

		<h3>Technical Skills</h3>

		<p>Working knowledge in Scrum, Agile, and Waterfall software development techniques. Android mobile device application development using the Android SDK, Eclipse, and Android Studio. Java (6 / 7) – 9 years. JavaScript – 2 years. Linux, CentOS, Ubuntu, Bash, Vim, NPM, Bower. Proficient in SVN, GIT, SQL, Microsoft Office, Eclipse, Visual Studio Code, Maven, Android Studio, Gradle, Notepad++, Sublime Text, Inkscape.</p>

		<h3>Education and Training</h3>

		<p>Towson University.  Earned Bachelor of Computer Science, class of 2014.	8/10 – 5/14 Davis & Elkins College.  Bachelor of Computer Science, representative to student assembly.	8/09 – 5/10 Montgomery Community College.  Bootstrap for Mobile Web.	3/15 – 6/15 Frederick Community College.  LAN Design and Management.	6/10 – 9/10</p>

		<h3>Person Data / Interests</h3>

		<p>Towson University Marching Band, Drumline. Languages: English, Spanish (conversational), basic American Sign Language. Typing Speed: 90 WPM. USSA Licensed Alpine Racing Coach; USS J-1 alpine ski racer. USCSA collegiate racer</p>
		-->

		<!-- Jonathan Smoley
Phone: 301-788-9936 | E-mail: jonathanws18@gmail.com | 611 South Charles Street, Apt #225, Baltimore, MD
Clearance: Active Top Secret / Sensitive Compartmented Information
Work Experience -->

	</div>
</template>

<script>
import Education from './Education.vue';
import Experience from './Experience.vue';
import Header from '../common/Header.vue';
import Intro from './Intro.vue';
import Skills from './Skills.vue';

export default {
	components: {
		Education, Experience, Header, Intro, Skills
	}
}
</script>

<style lang="scss" scoped>

@import '../../display-dimensions';
@import '../../variables';
@import 'styles/constants';

$hero-height: 250px;
$aligned-container-multiplier: 1;

.resume {
	.hero-banner {
		background-color: $accent-color;
	}
	.container {
		display: flex;
		justify-content: center;
		background-color: #eee;
		.aligned-container {
			.name-and-stuff {
				display: flex;
				flex-direction: column;
				justify-content: center;
				h2, h4 {
					margin: 0;
					color: white;
				}
			}
			h3 {
				text-align: center;
				margin: 48px 0;
				color: $accent-color;
			}
		}

	}
}

@include for(phones-only) {
	$hero-height: 250px;
	$aligned-container-multiplier: 1;

	.resume {
		.hero-banner {
			height: $hero-height;
		}
		.container {
			.aligned-container {
				margin-top: -$hero-height;
				width: $hero-height * $aligned-container-multiplier;
				.name-and-stuff {
					height: $hero-height / 2;
				}
				.intro {
					height: $hero-height;
				}
			}
		}
	}
}

@include for(phones-and-up) {
	$hero-height: 300px;
	$aligned-container-multiplier: 2;

	.resume {
		.hero-banner {
			height: $hero-height;
		}
		.container {
			.aligned-container {
			margin-top: -$hero-height;
				width: $hero-height * $aligned-container-multiplier;
				.name-and-stuff {
					height: $hero-height / 2;
				}
				.intro {
					height: $hero-height;
				}
			}
		}
	}
}

@include for(4k-and-up) {
	$hero-height: 500px;
	$aligned-container-multiplier: 4;

	.resume {
		.hero-banner {
			height: $hero-height;
		}
		.container {
			.aligned-container {
			margin-top: -$hero-height;
				width: $hero-height * $aligned-container-multiplier;
				.name-and-stuff {
					height: $hero-height / 2;
					font-size: 2em;
				}
				.intro {
					height: $hero-height;
				}
			}
		}
	}
}
</style>
