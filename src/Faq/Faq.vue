<template>
    <div class="Faq" id="Faq">
        <h2 class="Title"> Frequently Asked <span>Questions</span></h2>

        <div class="row Answers">
            <div class="col-md-6">
                <h3 class="Question">What is Node Conference Armenia?</h3>
                <p class="Answer">
                    Node Conference is a tech conference that brings together more than 600 tech
                    professionals to attend talks, workshops, participate in
                    competitions, get informed about open positions at sponsor IT companies and to have fun.
                </p>

                <h3 class="Question">Who are the speakers?</h3>
                <p class="Answer">
                    To learn more about our speakers, please,
                    <a href="#Speakers" v-smooth-scroll="navConfig">click here</a>.
                </p>

                <h3 class="Question">What are the talk topics?</h3>
                <p class="Answer">
                    To see the talk sessions timetable and topics, please
                    <a href="#Schedule" v-smooth-scroll="navConfig">click here</a>.
                </p>

                <h3 class="Question">What is the conference language?</h3>
                <p class="Answer">
                    The conference will be held mainly in Armenian but there are also
                    English talks included in the program.
                </p>

                <h3 class="Question">When is it going to take place?</h3>
                <p class="Answer">
                    The conference will take place from 10:00 to 17:00 on April 25, 2020.
                </p>

                <h3 class="Question">How to participate?</h3>
                <p class="Answer">
                    The entry of NodeConfAM20 is invitation-only so
                    please make sure to request your free invite
                    <a href="http://bit.ly/joinNodeConfAM20" target="_blank">here</a>
                    in 4 weeks after the application opens. Starting from March 16 the tickets will cost 5000AMD.
                </p>

            </div>
            <div class="col-md-6">
                <h3 class="Question">How much is the entry-ticket?</h3>
                <p class="Answer">
                    The event entry is free of charge before March 16. Later it will cost 5000AMD.
                </p>

                <h3 class="Question">Where is it going to be held?</h3>
                <p class="Answer">
                    NodeConfAM20 will be held at the B Building of
                    <a href="https://goo.gl/maps/HmDBXyu3G9z" target="_blank">American University of Armenia</a>
                    (40 Marshal Baghramyan Ave, Yerevan)․
                </p>

                <h3 class="Question">When is the deadline for registration?</h3>
                <p class="Answer">
                    The deadline for requesting free tickets ends March 15.
                </p>

                <h3 class="Question">Who supports Node Conference Armenia?</h3>
                <p class="Answer">
                    To learn about our sponsors and partners, please,
                    <a href="#Sponsors" v-smooth-scroll="navConfig">click here</a>.
                </p>

                <h3 class="Question">How can I help the team?</h3>
                <p class="Answer">
                    Oh, thank you for your kindness.
                    To help us make the NodeConfAM20 happen please <a href="http://bit.ly/NodeConfAM20team"
                                                                                       target="_blank">apply here</a>
                    to become a Node Conf super volunteer!
                </p>

                <h3 class="Question">Will I get a certificate of participation?</h3>
                <p class="Answer">
                    Your certificate of participation in Node Conference is going to be
                    your larger network in IT, updated knowledge,
                    nice little gifts and good memories. Do you still need that piece of paper?
                </p>

                <h3 class="Question">Who are behind the Node Conference Armenia? </h3>
                <p class="Answer">
                    To see the Node Conference Armenia team, please,
                    <a href="#Team" v-smooth-scroll="navConfig">click here</a>.
                </p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
	data() {
		return {
			navConfig: {
				duration: 1000,
				offset: -66,
			},
		};
	},
};
</script>

<style scoped lang="scss">
    .Faq {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-direction: column;
        padding: 50px 0;
    }

    a {
        color: #6cc24a;
        font-weight: bold;
    }


    .Title {
        text-align: center;
        margin-bottom: 50px;
        color: #fff;
    }

    .Question {
        color: #fff;
    }

    .Answer {
        margin-bottom: 1.5em;
        font-family: Barlow;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.25;
        letter-spacing: 0.5px;
    }

    .Answers {
        width: 65%;
        color: #d7d7d7;
    }

    @media (max-width: 768px) {
        .Answers {
            width: 100%;
        }
    }
</style>
