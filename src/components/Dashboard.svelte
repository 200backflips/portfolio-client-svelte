<script>
  import { uri, imageList, dataList, uploadList } from "../stores.js";
  import { onMount } from "svelte";

  onMount(async () => {
    const res = await fetch(`${$uri}/uploads`).catch(err =>
      console.error(err.message)
    );
    $dataList = await res.json();
    $imageList.map(img => {
      $dataList.map((data, i) => {
        if (
          img.placement === "otherImages" &&
          data.filename === img.path.match(regex)[0]
        ) {
          $dataList[i].selected = true;
        }
      });
    });
  });

  const regex = /[\w]+\.\w{2,4}/i;

  const patchRequest = (id, body) => {
    fetch(`${$uri}/images/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });
  };

  const setBigHighlight = e => {
    let value = e.target.value;
    $imageList.map(img => {
      if (img.placement === "bigHighlight") {
        if (e.target.id === "image") {
          return patchRequest(img._id, {
            path: `${$uri}/uploads/display/${value}`
          });
        }
        return patchRequest(img._id, { caption: value });
      }
    });
  };

  const setSmallHighlights = e => {
    let id = e.target.id;
    let value = e.target.value;
    $imageList.map(img => {
      if (
        img.placement === "smallHighlight" &&
        img.placementOrder === parseInt(id.match(/\d/))
      ) {
        if (id.startsWith("image")) {
          return patchRequest(img._id, {
            path: `${$uri}/uploads/display/${value}`
          });
        }
        return patchRequest(img._id, { caption: value });
      }
    });
  };

  // const addOtherImages = e => {
  //   if (e.target.checked === true) {
  //     return $otherImages.push(e.target.id);
  //   }
  //   return $otherImages.splice($otherImages.indexOf(e.target.id), 1);
  // };

  const handleUpload = e => {
    const uploadFile = new FormData();
    uploadFile.append('file', $uploadList[0])
    fetch(`${$uri}/uploads/`, {
      method: "POST",
      body: uploadFile
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
</script>

<style>
  .Dashboard {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    margin: 0 auto;
    overflow: auto;
  }
  .Dashboard h2 {
    margin: 2rem;
  }

  .set-highlights {
    display: grid;
    grid-template-columns: repeat(3, 270px);
    column-gap: 60px;
    font-size: 0.8rem;
  }

  .admin-form {
    background: #ffffff;
  }
  .admin-form label {
    padding: 0.2rem;
    font-size: 0.8rem;
  }
  .admin-form input[type="list"] {
    width: 250px;
    margin-bottom: 0.5rem;
    font-size: 0.8rem;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
  .admin-form textarea {
    width: 250px;
    height: 6rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem;
    font-size: 0.8rem;
    resize: none;
    overflow: auto;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  .input-field {
    margin-bottom: 1rem;
    padding: 0.5rem;
    background: #ffff;
    box-shadow: 2px 3px 7px rgba(0, 0, 0, 0.2);
  }

  .other-imgs {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 900px;
    margin: 0 auto;
    border: 2px solid rgba(0, 0, 0, 0.1);
    overflow: auto;
  }
  .other-imgs img {
    align-self: flex-start;
    width: 8rem;
    padding: 1rem;
  }
  .other-imgs img:hover {
    filter: grayscale(0%);
    opacity: 1;
  }
  .unselected-img {
    filter: grayscale(100%);
    opacity: 0.7;
  }
  .selected-img {
    filter: grayscale(0%);
    opacity: 1;
  }
</style>

<div class="Dashboard">
  <h2>admin dashboard</h2>
  <datalist id="img-list">
    {#each $dataList as { filename }}
      <option value={filename} />
    {/each}
  </datalist>
  <form class="admin-form">
    <div class="set-highlights">
      <div class="input-field">
        <label>stor highlight</label>
        <input
          type="list"
          list="img-list"
          id="image"
          on:change={setBigHighlight} />
        <label>bildtext</label>
        <textarea id="caption" on:change={setBigHighlight} />
      </div>
      <div class="input-field">
        <label>liten highlight 1</label>
        <input
          type="list"
          list="img-list"
          id="image0"
          on:change={setSmallHighlights} />
        <label>bildtext</label>
        <textarea id="caption0" on:change={setSmallHighlights} />
      </div>
      <div class="input-field">
        <label>liten highlight 2</label>
        <input
          type="list"
          list="img-list"
          id="image1"
          on:change={setSmallHighlights} />
        <label>bildtext</label>
        <textarea id="caption1" on:change={setSmallHighlights} />
      </div>
      <div class="input-field">
        <label>liten highlight 3</label>
        <input
          type="list"
          list="img-list"
          id="image2"
          on:change={setSmallHighlights} />
        <label>bildtext</label>
        <textarea id="caption2" on:change={setSmallHighlights} />
      </div>
      <div class="input-field">
        <label>liten highlight 4</label>
        <input
          type="list"
          list="img-list"
          id="image3"
          on:change={setSmallHighlights} />
        <label>bildtext</label>
        <textarea id="caption3" on:change={setSmallHighlights} />
      </div>
      <div class="input-field">
        <label>ladda upp filer</label>
        <input type="file" name="file" bind:files={$uploadList} id="file" />
        <input
          type="submit"
          value="ladda upp"
          on:click|preventDefault={handleUpload} />
      </div>
    </div>
    <div class="input-field">
      <label>övriga bilder</label>
      <div class="other-imgs">
        {#each $dataList as { filename, selected }}
          <img
            src={`${$uri}/uploads/display/${filename}`}
            alt="portfolio-items"
            id={filename}
            class={selected ? 'selected-img' : 'unselected-img'} />
        {/each}
      </div>
    </div>
  </form>
</div>
