<template>
    <div class="rating">
        <input type="radio" name="star" style="--c: #0a745b;"/>
        <input type="radio" name="star" style="--c: #0a745b;"/>
        <input type="radio" name="star" style="--c: #0a745b;"/>
        <input type="radio" name="star" style="--c: #0a745b;"/>
        <input type="radio" name="star" style="--c: #0a745b;"/>
    </div>
  
</template>

<script>
export default {
    name: "rantingStars"
}
</script>

<style scoped>

.rating{
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    padding: 3rem 4rem;
    border: none;
}

.rating input{
    position: relative;
    width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
}

.rating input::before{
    content: "\f005";
    font-family: fontAwesome;
    font-size: 2rem;
    position: absolute;
    color: #313131a2;
    transition: 0.3s;
}
.rating input:hover ~input::before,
.rating input:hover::before,
.rating input:checked ~input::before,
.rating input:checked::before{
    color: var(--c);
}

</style>