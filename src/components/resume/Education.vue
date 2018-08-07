<template>
	<div class="education box-shadow">
		<div class="school">
			<img src="../../assets/education-towson.png">
			<div class="description">
				<h4>Towson University</h4>
			</div>
		</div>
		<img src="../../assets/education-davisandelkins.png">
		lol
	</div>
</template>

<script>
export default {
	
}
</script>

<style lang="scss" scoped>
	.education {
		.school {
			display: flex;
			>img {
				flex-basis: 33%;
				display: block;
				max-width: 100%;
				height: auto;
			}
			.description {
				flex-basis: 64%;
			}
		}
	}
</style>