<template>
  <form class="form">
    <div class="form_header">
      <label for="checkbox">
        <input type="checkbox" id="checkbox" />
        <span></span>
      </label>
      <input type="text" placeholder="Type Something Here..." />
      <label for="star">
        <input type="checkbox" id="star" />
        <i
          class="fa-fw far fa-star star_icon"
          data-name="star"
          data-on="false"
        ></i>
      </label>
      <label for="pen">
        <input type="checkbox" id="pen" />
        <i
          class="fa-fw far fa-edit pen_icon"
          data-name="pen"
          data-on="false"
        ></i>
      </label>
    </div>
    <div class="form_body">
      <fieldset>
        <legend>Deadline</legend>
        <label>Your name:</label> <input type="date" />
        <label>Your age:</label> <input type="time" />
      </fieldset>
      <fieldset>
        <legend>File</legend>
        <label>Your name:</label> <input type="file" />
      </fieldset>
      <fieldset>
        <legend>Comment</legend>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </fieldset>
    </div>
    <div class="form_footer">
      <button class="cancel_button">&#10060; Cancel</button>
      <button class="save_button">&plus; Save</button>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  outline: 1px solid green;
}
.form {
  background: global.$pale-grey;
  width: 300px;
  margin: 0 auto;
  border-radius: 5px 5px 0 0;
  box-shadow: 0 4px 4px global.$medium-grey;

  &_header {
    display: flex;
    align-items: center;
    padding: 18px;
    @include global.tablet {
      padding: 28px 32px;
    }
    > * + * {
      margin-left: 10px;
      @include global.tablet {
        margin-left: 20px;
      }
    }
    & > label {
      font-size: 0;
    }
    input[type="checkbox"] {
      display: none;
    }
    input[type="text"] {
      flex: 1 2 150px;
      font-size: 16px;

      &::placeholder {
        color: black;
      }
      @include global.tablet {
        font-size: 20px;
      }
    }
    label[for="checkbox"] > span {
      display: inline-block;
      min-width: 20px;
      height: 20px;
      line-height: 20px;
      background: global.$white;
      position: relative;
      text-align: center;
      border-radius: 2px;

      &:hover::after {
        content: "\2713";
        font-size: 16px;
        color: global.$light-grey;
        vertical-align: middle;
      }

      @include global.tablet {
        min-width: 24px;
        height: 24px;
        line-height: 24px;
      }
    }
    i {
      font-size: 20px;
      transition: all 0.3s ease-in-out;

      @include global.tablet {
        font-size: 24px;
      }
    }
  }
  &_body {
    border-top: 2px solid global.$medium-grey;
    padding: 24px 72px;
  }
  &_footer {
    font-size: 0;
    button {
      width: 50%;
      padding: 16px 0;
    }
    .cancel_button {
      background: global.$white;
      color: global.$red;
      border-radius: 0 0 0 5px;
    }
    .save_button {
      background: global.$light-blue;
      color: white;
      border-radius: 0 0 5px 0;
    }
  }

  @include global.tablet {
    width: 620px;
  }
}

// 點擊 input 讓 icon 變亮
input[type="checkbox"]:checked + .star_icon {
  color: global.$dark-yellow;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
}

input[type="checkbox"]:checked + .pen_icon {
  color: global.$light-blue;
  font-weight: 900;
  transition: all 0.3s ease-in-out;
}

#checkbox:checked + span {
  box-shadow: inset 0 0 0 15px global.$light-blue;
  transition: all 0.3s ease-in-out;
  &::after {
    content: "\2713";
    font-size: 16px;
    color: white;
  }
}
</style>
