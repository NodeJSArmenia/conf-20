<template>
    <section class="Team" id="Team">
        <div class="Container">
            <h2 class="Title">Incredible <span>Team</span></h2>
            <div class="row"
                 v-for="(team, teamIndex) in teams"
                 :key="teamIndex">
                <div class="MemberCol">
                    <div class="Member"
                         v-for="(member, index) in team.members"
                         :key="index">
                        <div class="Img" :style="{ backgroundImage: `url(${member.img})` }"></div>
                        <h3 class="Name">{{member.name}}</h3>
                        <h5 class="Position">{{member.position}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { serverUri } from '../variables';

export default {
	data: () => ({
		teams: [
			{
				members: [
					{
						img: `${serverUri}/team/Nairi_Harutyunyan.png`,
						name: 'Nairi Harutyunyan',
						position: 'Backend Engineer at Screenful, Co-Founder at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/Anna_Harutyunyan.png`,
						name: 'Anna Harutyunyan',
						position: 'Project Manager at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/Khachatur_Tovmasyan.png`,
						name: 'Khachatur Tovmasyan',
						position: 'Lead Front-End Engineer at SFL, Co-Founder at Node.js Armenia',
					},
					{
						img: `${serverUri}/team/Svetlana_Hovhannisyan.png`,
						name: 'Svetlana Hovhannisyan',
						position: 'Technical Recruiter at Meettal',
					},
					{
						img: `${serverUri}/team/Vardges_Vardanyan.png`,
						name: 'Vardges Vardanyan',
						position: 'Javascript Engineer at VMWare',
					},
				],
			},
			{
				members: [
					{
						img: `${serverUri}/team/Alexander_Adamyan.png`,
						name: 'Alexander Adamyan',
						position: 'Co-Founder at Simply Technologies',
					},
					{
						img: `${serverUri}/team/Varser_Zakaryan.png`,
						name: 'Varser Zakaryan',
						position: 'Managing Director at Tech Events Armenia',
					},
					{
						img: `${serverUri}/team/Gevorg_Harutyunyan.png`,
						name: 'Gevorg Harutyunyan',
						position: 'Front-End Architect at Screenful, Founder of ModularCode',
					},
					{
						img: `${serverUri}/team/Rouben_Meschian.png`,
						name: 'Rouben Meschian',
						position: 'Founding Software Engineer at Cambridge Semantics',
					},
					{
						img: `${serverUri}/team/Edgar_Marukyan.png`,
						name: 'Edgar Marukyan',
						position: 'CTO at Renderforest',
					},
				],
			},
		],
	}),
};
</script>

<style scoped lang="scss">
    @import './../_styles/colors';

    .Team {
        padding: 50px 0;
    }

    .MemberCol {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
    }

    .Title {
        margin-bottom: 50px;
    }

    .Member {
        width: 20%;
        text-align: center;
        margin-bottom: 25px;
        padding: 0 10px;
    }

    .Img {
        width: 100%;
        padding-bottom: 100%;
        margin-bottom: 10px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        transition: .3s ease all;
    }

    .Position {
        display: inline;
    }

    .Member:hover {
        .Img {
            transform: scale(1.1);
        }
    }

    .Name {
        font-family: Barlow;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
    }

    .Position {
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.43;
        letter-spacing: 0.35px;
        text-align: center;
        color: #e8e8e8;
    }

    @media (max-width: 700px) {
        .Name {
            font-size: 20px;
        }
    }

    @media (max-width: 600px) {
        .MemberCol {
            justify-content: center;
        }

        .Member {
            width: 100%;
            padding: 0 30px;
        }

        .Img {
            background-size: 80%;
        }

        .TeamTitle {
            text-align: center;
            padding: 0;
        }
    }
</style>
