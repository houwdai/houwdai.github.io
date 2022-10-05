$.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/"
}).done((result)=>{
    // console.log(result.results)
    test = "";
    $.each(result.results,function(key,val){
        
        test += `<tr>
                    <th scope="row">${key+1}</th>
                    <td>${val.name.charAt(0).toUpperCase() + val.name.slice(1)}</td>
                    <td><button class="btn btn-success" onclick="detailChara('${val.url}')" data-bs-toggle="modal" data-bs-target="#modalDetailSW">Detail</button></td>
                </tr>`;
    })
    $("#data").html(test);
}).fail((error)=>{
    console.log(error);
})


function detailChara(stringURL){
    $.ajax({
        url: stringURL
    }).done((result)=>{
        console.log(result);
        //cek nama
        console.log(result.name)
        name_char = result.name
        $("#nama").html(name_char)
        
        $("#namas").html(name_char.charAt(0).toUpperCase() + name_char.slice(1))
        //cek weigth
        $("#weigth").html(result.weight)
        //cek height
        $("#height").html(result.height)
        //cek iamges 
        console.log(result.sprites.other.home.front_default
            )
      
        $("#image").attr('src',  result.sprites.other.home.front_default)

        //cek abilities
        for (let i = 0; i < result.abilities.length; i++) {
            if (i==0){
                $("#ability0").html(result.abilities[0].ability.name)
            }
            if (i==1){
                $("#ability1").html(result.abilities[1].ability.name)
            }
            if (i==2){
                $("#ability2").html(result.abilities[2].ability.name)
            }
            if (i==3){
                $("#ability3").html(result.abilities[3].ability.name)
            }
            if (i > 3){
                $("#ability").html(result.abilities[i].ability.name)
            }
            console.log(result.abilities[i].ability.name)
          
        }
        //cek statistiik
        test = "";
        $.each(result.stats,function(key,val){
            test += `<p style="margin-bottom: 0; font-size: 11px;">${val.stat.name} </p>
            <div class="progress">
                <div class="progress-bar bg-success" role="progressbar" style="width: ${val.base_stat}%; " aria-valuenow="${val.base_stat}" aria-valuemin="0" aria-valuemax="100">${val.base_stat}</div>
              </div>`;
        })
        $("#cek_stat").html(test);
        for (let i = 0; i < result.stats.length; i++){
            console.log("nama = " + result.stats[i].stat.name)
            console.log("base_stat = " + result.stats[i].base_stat)
            $("#namastat").html(result.stats[i].stat.name)
            $("#prog").attr('aria-valuenow',result.stats[i].base_stat)
            $("#prog").html(result.stats[i].base_stat)
        }
        // //cek types
        for (let i = 0; i < result.types.length; i++){
            console.log("nama = " + result.types[i].type.name)
        }
        
        types = "";
        $.each(result.types,function(key,val){
           //console.log(val.type.name)
           types +=`
            <td> ${val.type.name.charAt(0).toUpperCase() + val.type.name.slice(1) + ","} </td>
            `;
    })
        $("#types").html(types);
       
    }).fail((error)=>{
        console.log(error);
    })
}
