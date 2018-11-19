<template>
  <div class="graph-comment-list">
    <div class="scrollbar" id="style-2">
      <div class="force-overflow">
      <p class="message mymessage"> hahahahha ajuuuu nice</p>
      <p class="message"> hahahahha ajuuuu nice</p>
      <p class="message"> hahahahha ajuuuu nice</p>
      <p class="message"> hahahahha ajuuuu nice</p>
      <p class="message"> hahahahha ajuuuu nice</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.mymessage{
  background-color: var(--theme-blue);
}
.message:not(:last-child){
  margin:0;
}

.scrollbar
{
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 2rem;
  height: 6rem;
  background: whitesmoke;
  overflow-y: scroll;
  
}


#style-2::-webkit-scrollbar-track
{
  box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar
{
  width: 12px;
  background-color: #F5F5F5;
}

#style-2::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: grey;
}

</style>
