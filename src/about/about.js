import "./about.css";
import Glide from '@glidejs/glide';
import GitHubApi from '../js/modules/GithubApi';


const gitApi = new GitHubApi();
gitApi.getCommitStory()
  .then((data) => {
    if (data.length >= 1) {
      gitApi.drawCommit(data);
    }
  })
  .then(() => {

    console.log('hi');


    new Glide('.glide', {
    type: 'carousel',
    perView: 3.4,
    focusAt: 'center',
    breakpoints: {
      1439: {
        perView: 2.2,
        focusAt: 1,
      },
      767: {
        perView: 1,
        focusAt: 1     }
      }
    }).mount()
  })
  .catch(err => {
    // alert(`${err}: ${err.status}`);
    // console.log(`${err}: ${res.status}`);
  });;




// new Glide('.glide', {
//   // type: 'slider',
//   // startAt: 0,
//   // perView: 3.5,
//   type: 'carousel',
//   perView: 3.4,
//   focusAt: 'center',
//   breakpoints: {
//     1439: {
//       perView: 2.2,
//       focusAt: 1,
//     },
//     767: {
//       perView: 1,
//       focusAt: 1     }
//   }
// }).mount()



