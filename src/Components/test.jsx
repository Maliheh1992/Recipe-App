<article class="article recipe-page">

<div class="filter-bar" data-filter-bar>

<div class="title-wrapper">

  <span class="material-symbols-outlined" aria-hidden="true">filter_list</span>

  <p class="title-medium">Filters</p>

  <button class="icon-btn close-btn has-state" aria-label="Close filter bar" data-filter-toggler>
    <span class="material-symbols-outlined" aria-hidden="true">close</span>
  </button>

</div>

<div class="filter-content">

  <div class="search-wrapper">
    <div class="input-outlined">
      <label for="search" class="body-large label">Search</label>

      <input type="search" name="search" id="search" placeholder="Search recipes"
        class="input-field body-large">
    </div>
  </div>

  <div class="accordion-container" data-accordion>

    <button class="accordion-btn has-state" aria-controls="cook-time" aria-expanded="false" data-accordion-btn>
      <span class="material-symbols-outlined" aria-hidden="true">timer</span>

      <p class="label-large">Cooking Time</p>

      <span class="material-symbols-outlined trailing-icon" aria-hidden="true">expand_more</span>
    </button>

    <div class="accordion-content" id="cook-time">
      <div class="accordion-overflow" data-filter="time">

        <label class="filter-chip label-large">
          &lt; 5 minutes
          <input type="radio" name="cook-time" value="5" aria-label="5 or less minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          5 - 10 minutes
          <input type="radio" name="cook-time" value="5-10" aria-label="5 to 10 minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          10 - 20 minutes
          <input type="radio" name="cook-time" value="10-20" aria-label="10 to 20 minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          20 - 30 minutes
          <input type="radio" name="cook-time" value="20-30" aria-label="20 to 30 minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          30 - 40 minutes
          <input type="radio" name="cook-time" value="30-40" aria-label="30 to 40 minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          40 - 50 minutes
          <input type="radio" name="cook-time" value="40-50" aria-label="40 to 50 minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          50 - 60 minutes
          <input type="radio" name="cook-time" value="50-60" aria-label="50 to 60 minutes" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          &gt; 1 hours
          <input type="radio" name="cook-time" value="60+" aria-label="1 or more hours" class="checkbox">
        </label>

      </div>
    </div>

  </div>

  <div class="accordion-container" data-accordion>

    <button class="accordion-btn has-state" aria-controls="ingr" aria-expanded="false" data-accordion-btn>
      <span class="material-symbols-outlined" aria-hidden="true">nutrition</span>

      <p class="label-large">Ingredients</p>

      <span class="material-symbols-outlined trailing-icon" aria-hidden="true">expand_more</span>
    </button>

    <div class="accordion-content" id="ingr">
      <div class="accordion-overflow" data-filter="ingr">

        <label class="filter-chip label-large">
          &lt; 5 ingredients
          <input type="radio" name="ingr" value="5" aria-label="5 or less ingredients" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          5 - 10 ingredients
          <input type="radio" name="ingr" value="5-10" aria-label="5 to 10 ingredients" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          10 - 20 ingredients
          <input type="radio" name="ingr" value="10-20" aria-label="10 to 20 ingredients" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          20 - 30 ingredients
          <input type="radio" name="ingr" value="20-30" aria-label="20 to 30 ingredients" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          &gt; 30 ingredients
          <input type="radio" name="ingr" value="30+" aria-label="30 or more ingredients" class="checkbox">
        </label>

      </div>
    </div>

  </div>

  <div class="accordion-container" data-accordion>

    <button class="accordion-btn has-state" aria-controls="calories" aria-expanded="false" data-accordion-btn>
      <span class="material-symbols-outlined" aria-hidden="true">ulna_radius_alt</span>

      <p class="label-large">Calories</p>

      <span class="material-symbols-outlined trailing-icon" aria-hidden="true">expand_more</span>
    </button>

    <div class="accordion-content" id="calories">
      <div class="accordion-overflow" data-filter="calories">

        <label class="filter-chip label-large">
          &lt; 50 calories
          <input type="radio" name="calories" value="50" aria-label="50 or less calories" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          50 - 100 calories
          <input type="radio" name="calories" value="50-100" aria-label="50 to 100 calories" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          100 - 200 calories
          <input type="radio" name="calories" value="100-200" aria-label="100 to 200 calories" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          200 - 300 calories
          <input type="radio" name="calories" value="200-300" aria-label="200 to 300 calories" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          300 - 400 calories
          <input type="radio" name="calories" value="300-400" aria-label="300 to 400 calories" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          400 - 500 calories
          <input type="radio" name="calories" value="400-500" aria-label="400 to 500 calories" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          &gt; 500 calories
          <input type="radio" name="calories" value="500+" aria-label="500 or more calories" class="checkbox">
        </label>

      </div>
    </div>

  </div>

  <div class="accordion-container" data-accordion>

    <button class="accordion-btn has-state" aria-controls="diet" aria-expanded="false" data-accordion-btn>
      <span class="material-symbols-outlined" aria-hidden="true">spa</span>

      <p class="label-large">Diet</p>

      <span class="material-symbols-outlined trailing-icon" aria-hidden="true">expand_more</span>
    </button>

    <div class="accordion-content" id="diet">
      <div class="accordion-overflow" data-filter="diet">

        <label class="filter-chip label-large">
          Balanced

          <input type="checkbox" name="Balanced" aria-label="Balanced" value="balanced" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          High Fiber

          <input type="checkbox" name="High Fiber" aria-label="High Fiber" value="high-fiber" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          High Protein

          <input type="checkbox" name="High Protein" aria-label="High Protein" value="high-protein"
            class="checkbox">
        </label>

        <label class="filter-chip label-large">
          Low Carb

          <input type="checkbox" name="Low Carb" aria-label="Low Carb" value="low-carb" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          Low Fat

          <input type="checkbox" name="Low Fat" aria-label="Low Fat" value="low-fat" class="checkbox">
        </label>

        <label class="filter-chip label-large">
          Low Sodium

          <input type="checkbox" name="Low Sodium" aria-label="Low Sodium" value="low-sodium" class="checkbox">
        </label>

      </div>
    </div>

  </div>

 

</div>

<div class="filter-actions">
  <button class="btn btn-secondary label-large has-state" data-filter-clear>Clear</button>

  <button class="btn btn-primary label-large" data-filter-toggler data-filter-submit>Apply</button>
</div>

</div>

<div class="recipe-container container">

        <div class="title-wrapper">

          <h2 class="headline-small">All Recipes</h2>

          <button class="btn btn-secondary btn-filter has-icon has-state" aria-label="Open filter bar"
            data-filter-toggler data-filter-btn>

            <span class="material-symbols-outlined" aria-hidden="true">filter_list</span>

            <div class="wrapper">
              <span class="label-large">Filters</span>

              <div class="badge label-small" data-filter-count></div>
            </div>

          </button>

        </div>

        <div class="grid-list" data-grid-list></div>

        <div class="load-more grid-list" data-load-more></div>

      </div>
</article>