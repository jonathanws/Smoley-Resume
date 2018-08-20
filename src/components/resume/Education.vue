<template>
	<div class="education">

		<div v-for="(school, index) in schools" v-bind:key="school.name" :class="index == 0 ? 'active' : ''" class="school box-shadow">
			<div class="school-icon">
				<img v-if="school.asset" :src="school.asset">
			</div>
			<div class="details">
				<div class="name-and-dates" style="display: flex; align-items: center;">
					<h4 v-if="index == 0" class="school-name">{{school.name}}</h4>
					<h5 v-else class="school-name">{{school.name}}</h5>

					<i v-if="school.dates">{{school.dates}}</i>
				</div>

				<p v-if="school.degree">Obtained<span class="degree" style="padding-left: 3px;">{{school.degree}}</span></p>

				<p class="school-description">{{school.description}}</p>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	data: function() {
		return {
			schools: [
				{
					asset: require('../../assets/education-towson.png'),
					name: 'Towson University',
					degree: 'Bachelor of Science in Computer Science',
					dates: '2010-2014',
					description: 'Towson University Marching Band -- Drumline\nWorked for university\'s Mobile Development team'
				},
				{
					asset: require('../../assets/education-davisandelkins.png'),
					name: 'Davis & Elkins College',
					dates: '2009-2010',
					description: 'Davis and Elkins Alpine Ski Racing Team, Student Assembly Representative, IT desk assistant'
				},
				{
					asset: '',
					name: 'Montgomery Community College',
					dates: '3/15 - 6/15',
					description: 'Bootstrap for Mobile Web certificate'
				},
				{
					asset: require('../../assets/education-frederickcommunity.jpg'),
					name: 'Frederick Community College',
					dates: '6/10 - 9/10',
					description: 'LAN Design and Management'
				}
			]
		}
	}
}
</script>

<style lang="scss" scoped>
@import 'styles/constants';

$img-size: 100px;
$padding: 8px;

.education {
	.school {
		display: flex;
		margin-bottom: 16px;
		background-color: white;
		border-top: 4px solid $accent-color;
		&.active {
			.school-icon {
				flex-basis: ($img-size - ($padding * 2)) * 2;
				height: ($img-size - ($padding * 2)) * 2;
				padding: $padding * 2;
				img {
					max-height: ($img-size - ($padding * 2)) * 2;
					max-width: ($img-size - ($padding * 2)) * 2;
				}
			}
		}
		.school-icon {
			flex-basis: $img-size - ($padding * 2);
			display: flex;
			align-items: center;
			height: $img-size - ($padding * 2);
			padding: $padding;
			img {
				max-height: $img-size - ($padding * 2);
				max-width: $img-size - ($padding * 2);
			}
		}
		.details {
			flex-grow: 1;
			margin: ($padding * 2) $padding;
			padding-left: $padding * 2;
			border-left: 2px solid $accent-color;
			.name-and-dates {
				display: flex;
				align-items: center;
				.school-name {
					flex-grow: 1;
				}
				i {
					font-size: 12px;
				}
			}
			.school-name,
			.degree {
				color: $accent-color;
			}
			h4, h5, p {
				margin-top: 0;
			}
		}
	}
}
</style>