<template>
    <div class="container">
        <!-- Sidebar -->
        <div id="sidebar">
            <div id="image-content">
                <img src="https://arquivos.unb.br/arquivos/2024150224ff243068307f3c4b15a8090/abso_2024.jpg" alt="Alice Kaushik" class="profile-pic"/>
                <h2>ALESSANDRO BORGES DE SOUSA OLIVEIRA</h2>
                <h3>Faculdade do Gama</h3>
            </div>
            
            <button class="role-button">UX Designer</button>
            <p class="quote">If you equip people with the right tools, they will build the most extraordinary things.</p>
            
            <div class="all-personal-info">
                <div class="academic-info">
                    <h3>Formação Acadêmica</h3>
                    <ul>
                        <li>27</li>
                        <li>Paris</li>
                        <li>Female</li>
                        <li>Student</li>
                    </ul>
                </div>
                <div class="professor-contact-info">
                    <h3>Contatos</h3>
                    <p>UX Designer @ Guillet.io</p>
                    <p>€74,000 - 80,000</p>
                </div>
            </div>

            
            <!-- <div class="traits">
                <button>Cooperative</button>
                <button>King</button>
                <button>Creative</button>
                <button>Smart</button>
                <button>Reliable</button>
                <button>Organized</button>
            </div> -->
        </div>

        <!-- Content1 -->
        <div id="content1">
            <div class="section" id="user-environment">
                <h3>User Environment</h3>
                <p>Home Space</p>
                <p>Solo Worker</p>
                <p>Mobile</p>
                <!-- Example content for user environment -->
            </div>
            <div class="section" id="frustration">
                <h3>Frustration</h3>
                <ul>
                    <li>Getting buy-in for the new department's activities</li>
                    <li>Dealing with more bureaucracy than in her old job</li>
                    <li>Communicating necessity for change to development team</li>
                    <li>Not terribly tech savvy - doesn't like the process</li>
                </ul>
            </div>
        </div>

        <!-- Content2 -->
        <div id="content2">
            <div class="section" id="technology">
                <h3>Technology</h3>
                <p>Mobile, Desktop, iOS, Android, Windows</p>
                <!-- Example content for technology -->
            </div>
            <div class="section" id="personality">
                <h3>Personality</h3>
                <p>Introvert - Extrovert</p>
                <p>Analytical - Creative</p>
                <p>Loyal - Fickle</p>
                <p>Passive - Active</p>
            </div>
            <div class="section" id="goal">
                <h3>Goal</h3>
                <ul>
                    <li>Introduce user-focused mentality and methods into traditional company landscape</li>
                    <li>Improve usability of bank's customer-facing interfaces</li>
                    <li>Grow the UX team</li>
                </ul>
            </div>
            <div class="section" id="tools">
                <h3>Tools</h3>
                <p>Figma, Adobe XD, Photoshop, Illustrator</p>
                <!-- Example content for tools -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    height: 100vh;
    grid-template-columns: 0.7fr 1fr 1fr;
    gap: 20px;
    padding: 20px;
    background-color: #f5f5f5;
}

#sidebar {
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}





#image-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
}

#image-content h2 {
    padding-top: 10px;
}

#image-content h3 {
    margin-top: 0px;
}

.profile-pic {
    width: 50%;
    border-radius: 8px;
}

.role-button {
    background-color: #ff6347;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;
}

.quote {
    margin-top: 10px;
    font-style: italic;
}

.all-personal-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.academic-info, .professor-contact-info {
    margin-top: 20px;
}

.academic-info{
    background-color: blue;
}

.professor-contact-info{
    background-color: red;
}
.academic-info ul {
    list-style: none;
    padding: 0;
}

.traits button {
    background-color: #e0e0e0;
    border: none;
    padding: 5px 10px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
}

#content1, #content2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.section {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Estilos para dispositivos móveis */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
    }

    #sidebar {
        grid-row: 1;
    }

    #content1, #content2 {
        grid-row: auto;
        display: flex;
        flex-direction: column;
    }
}
</style>

<script>
export default {
    name: "UserProfile"
}
</script>
