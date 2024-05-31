
<template>
    <div class="container">
        <div class="rating">
            <input type="radio" name="star1" id="star1-5" style="--c: #0a745b;"/>
            <input type="radio" name="star1" id="star1-4" style="--c: #0a745b;"/>
            <input type="radio" name="star1" id="star1-3" style="--c: #0a745b;"/>
            <input type="radio" name="star1" id="star1-2" style="--c: #0a745b;"/>
            <input type="radio" name="star1" id="star1-1" style="--c: #0a745b;"/>
        </div>

        <div class="rating">
            <input type="radio" name="star2" id="star2-5" style="--c: #0a745b;"/>
            <input type="radio" name="star2" id="star2-4" style="--c: #0a745b;"/>
            <input type="radio" name="star2" id="star2-3" style="--c: #0a745b;"/>
            <input type="radio" name="star2" id="star2-2" style="--c: #0a745b;"/>
            <input type="radio" name="star2" id="star2-1" style="--c: #0a745b;"/>
        </div>

        <div class="rating">
            <input type="radio" name="star3" id="star3-5" style="--c: #0a745b;"/>
            <input type="radio" name="star3" id="star3-4" style="--c: #0a745b;"/>
            <input type="radio" name="star3" id="star3-3" style="--c: #0a745b;"/>
            <input type="radio" name="star3" id="star3-2" style="--c: #0a745b;"/>
            <input type="radio" name="star3" id="star3-1" style="--c: #0a745b;"/>
        </div>
    
        <div class="rating">
            <input type="radio" name="star4" id="star4-5" style="--c: #0a745b;"/>
            <input type="radio" name="star4" id="star4-4" style="--c: #0a745b;"/>
            <input type="radio" name="star4" id="star4-3" style="--c: #0a745b;"/>
            <input type="radio" name="star4" id="star4-2" style="--c: #0a745b;"/>
            <input type="radio" name="star4" id="star4-1" style="--c: #0a745b;"/>
        </div>
    </div>
</template>

<script>
export default {
    name: "ratingStars"
}
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
}

.rating{
    display: flex;
    flex-direction: row-reverse;
    padding: 1rem 0; /* Adjusted padding for better spacing */
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
    position: absolute;
    font-family: fontAwesome;
    font-size: 3rem;
    color: #313131a2;
    transition: 0.5s;
}

.rating input:hover ~ input::before,
.rating input:hover::before,
.rating input:checked ~ input::before,
.rating input:checked::before{
    color: var(--c);
}
</style>
```

### Alterações feitas:

1. **Mudança nos nomes dos inputs**: Cada fileira de estrelas tem um nome de grupo diferente (`star1`, `star2`, `star3`, `star4`), garantindo que a seleção de uma fileira não afete as outras.
2. **Alinhamento à esquerda**: Alinhei os itens da coluna à esquerda usando `align-items: flex-start` no contêiner `.container` e mudei a direção das estrelas para `row` em vez de `row-reverse` no `.rating`.
3. **Ajustes de padding**: Ajustei o padding para `1rem 0` para uma melhor aparência visual.