<template>
    <section class="Team" id="Team">
        <div class="Container">
            <h2 class="Title">Incredible <span>Team</span></h2>
            <div class="row"
                 v-for="(team, teamIndex) in teams"
                 :key="teamIndex">
                <div class="col MemberCol"
                     v-for="(member, index) in team.members"
                     :key="index">
                    <div class="Member">
                        <div class="Img" :style="{ backgroundImage: `url(${member.img})` }"></div>
                        <h3 class="Name">{{member.name}}</h3>
                        <h5 class="Position">{{member.position}}</h5>
                        <h5 class="Position Green" v-if="member.greenPosition">{{member.greenPosition}}</h5>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data: () => ({
            teams: [
                {
                    members: [
                        {
                            img: '/team/Nairi_Harutyunyan.png',
                            name: 'Nairi Harutyunyan',
                            position: 'Backend Engineer at Screenful, Co-Founder at ',
                            greenPosition: 'Node.js Armenia',
                        },
                        {
                            img: '/team/Anna_Harutyunyan.png',
                            name: 'Anna Harutyunyan',
                            position: 'Project Manager at ',
                            greenPosition: 'Node.js Armenia',
                        },
                        {
                            img: '/team/Khachatur_Tovmasyan.png',
                            name: 'Khachatur Tovmasyan',
                            position: 'Lead Front-End Engineer at SFL, Co-Founder at ',
                            greenPosition: 'Node.js Armenia',
                        },
                        {
                            img: '/team/Svetlana_Hovhannisyan.png',
                            name: 'Svetlana Hovhannisyan',
                            position: 'Technical Recruiter at Meettal',
                        },
                        {
                            img: '/team/Vardges_Vardanyan.png',
                            name: 'Vardges Vardanyan',
                            position: 'Javascript Engineer at VMWare',
                        },
                    ],
                },
                {
                    members: [
                        {
                            img: '/team/Alexander_Adamyan.png',
                            name: 'Alexander Adamyan',
                            position: 'Co-Founder at Simply Technologies',
                        },
                        {
                            img: '/team/Varser_Zakaryan.png',
                            name: 'Varser Zakaryan',
                            position: 'Project Manager at JavaScript Conference Armenia',
                        },
                        {
                            img: '/team/Gevorg_Harutyunyan.png',
                            name: 'Gevorg Harutyunyan',
                            position: 'Front-End Architect at Screenful, Founder of ModularCode',
                        },
                        {
                            img: '/team/Rouben_Meschian.png',
                            name: 'Rouben Meschian',
                            position: 'Founding Software Engineer at Cambridge Semantics',
                        },
                        {
                            img: '/team/Edgar_Marukyan.png',
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
        justify-content: center;
    }

    .Title {
        margin-bottom: 50px;
    }

    .Member {
        max-width: 180px;
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
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

        &.Green {
            color: $green-primary;
            display: block;
        }
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

    @media (max-width: 600px) {
        .MemberCol {
            width: 100%;
            min-width: 100%;
        }

        .Member {
            max-width: 280px;
        }

        .Img {
            background-size: 80%;
        }

        .Position {
            &.Green {
                display: contents;
            }
        }
    }
</style>
