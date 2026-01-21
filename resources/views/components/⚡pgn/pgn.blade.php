

<div class="dark:bg-green-800 rounded-md mx-auto px-2 py-2" id="board">
    This will be back soon.
</div>
@script
<script>
   
window.onload = function(){
    this.pgnViewer('board', {pgn: $wire.pgn, theme: 'green',
                locale: 'nl',
                layout: 'left',
                showResult: true,
                showFen: false,
                width: '480px',
                pieceStyle: 'merida',
                figurine: 'merida',
                headers: true,});
};

</script>
@endscript