const messages = ['from nobel origin', 'with organic background','that twists the Spritz' ];
// Returns a Promise that resolves after "ms" Milliseconds
const timer = ms => new Promise(res => setTimeout(res, ms))

async function load() {
  for (const element of messages) {
    await timer(3000);
    document.getElementById("dynamictext").innerHTML = element;
  }
}

load();
