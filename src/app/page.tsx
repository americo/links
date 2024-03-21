'use client';

import Image from "next/image";
import Link from "next/link";
import React from "react";

function TikTok() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: "rgb(254, 254, 254)",
        width: "45px",
        height: "45px",
        padding: "8px",
      }}
    >
      <path d="M107.867 13.4255V131.404C107.867 144.526 97.2917 155.092 84.2583 155.092C71.2167 155.092 60.65 144.517 60.65 131.404C60.65 118.442 71.225 107.876 84.2583 107.876V76.3922C53.8333 76.3922 29.1667 101.059 29.1667 131.404C29.1667 161.909 53.8333 186.576 84.2583 186.576C114.683 186.576 139.35 161.909 139.35 131.404V76.3922L141.008 77.2255C150.267 81.8589 160.475 84.2672 170.825 84.2672V52.7755L169.883 52.5422C151.933 40.0589 139.342 31.9255 139.342 13.4255H107.867Z"></path>
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: "rgb(254, 254, 254)",
        width: "45px",
        height: "45px",
        padding: "8px",
      }}
    >
      <path d="M65 16.6667H135C161.667 16.6667 183.333 38.3334 183.333 65.0001V135C183.333 147.819 178.241 160.113 169.177 169.177C160.113 178.241 147.819 183.333 135 183.333H65C38.3333 183.333 16.6667 161.667 16.6667 135V65.0001C16.6667 52.1813 21.7589 39.8875 30.8232 30.8233C39.8874 21.759 52.1812 16.6667 65 16.6667ZM63.3333 33.3334C55.3768 33.3334 47.7462 36.4941 42.1201 42.1202C36.494 47.7463 33.3333 55.3769 33.3333 63.3334V136.667C33.3333 153.25 46.75 166.667 63.3333 166.667H136.667C144.623 166.667 152.254 163.506 157.88 157.88C163.506 152.254 166.667 144.623 166.667 136.667V63.3334C166.667 46.7501 153.25 33.3334 136.667 33.3334H63.3333ZM143.75 45.8334C146.513 45.8334 149.162 46.9309 151.116 40.8844C153.069 50.8379 154.167 53.4074 154.167 56.2501C154.167 59.0128 153.069 61.6623 151.116 63.6158C149.162 65.5693 146.513 66.6668 143.75 66.6668C140.987 66.6668 138.338 65.5693 136.384 63.6158C134.431 61.6623 133.333 59.0128 133.333 56.2501C133.333 53.4074 134.431 50.8379 136.384 40.8844C138.338 46.9309 140.987 45.8334 143.75 45.8334ZM100 58.3334C111.051 58.3334 121.649 62.7233 129.463 70.5373C137.277 78.3513 141.667 88.9494 141.667 100C141.667 111.051 137.277 121.649 129.463 129.463C121.649 137.277 111.051 141.667 100 141.667C88.9493 141.667 78.3512 137.277 70.5372 129.463C62.7232 121.649 58.3333 111.051 58.3333 100C58.3333 88.9494 62.7232 78.3513 70.5372 70.5373C78.3512 62.7233 88.9493 58.3334 100 58.3334ZM100 75.0001C93.3696 75.0001 87.0107 77.634 82.3223 82.3224C77.6339 87.0108 75 93.3697 75 100C75 106.631 77.6339 112.989 82.3223 117.678C87.0107 122.366 93.3696 125 100 125C106.63 125 112.989 122.366 117.678 117.678C122.366 112.989 125 106.631 125 100C125 93.3697 122.366 87.0108 117.678 82.3224C112.989 77.634 106.63 75.0001 100 75.0001Z"></path>
    </svg>
  );
}

function Twitter() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: "rgb(254, 254, 254)",
        width: "45px",
        height: "45px",
        padding: "8px",
      }}
    >
      <title>X</title>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.406 3.24H4.298Z"></path>
    </svg>
  );
}

function YouTube() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fill: "rgb(254, 254, 254)",
        width: "45px",
        height: "45px",
        padding: "8px",
      }}
    >
      <path d="M83.3333 125L126.583 100L83.3333 75.0001V125ZM179.667 59.7501C180.75 63.6667 181.5 68.9167 182 75.5834C182.583 82.2501 182.833 88.0001 182.833 93.0001L183.333 100C183.333 118.25 182 131.667 179.667 140.25C177.583 147.75 172.75 152.583 165.25 154.667C161.333 155.75 154.167 156.5 143.167 157C132.333 157.583 122.417 157.833 113.25 157.833L100 158.333C65.0833 158.333 43.3333 157 34.75 154.667C27.25 152.583 22.4166 147.75 20.3333 140.25C19.25 136.333 18.5 131.083 18 124.417C17.4166 117.75 17.1666 112 17.1666 107L16.6666 100C16.6666 81.7501 18 68.3334 20.3333 59.7501C22.4166 52.2501 27.25 47.4167 34.75 45.3334C38.6666 44.2501 45.8333 43.5001 56.8333 43.0001C67.6666 42.4167 77.5833 42.1667 86.75 42.1667L100 41.6667C134.917 41.6667 156.667 43.0001 165.25 45.3334C172.75 47.4167 177.583 52.2501 179.667 59.7501Z"></path>
    </svg>
  );
}

export default function Home() {
  function handleSubscribe(event: any) {
    event.preventDefault();
    const email = event.target[0].value;

    fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 201) {
          alert("Inscrição realizada com sucesso");
        } else {
          alert("Erro ao realizar inscrição");
        }
      })
      .catch(() => {
        alert("Erro ao realizar inscrição");
      });
  }

  // Open link - get the link from function args and redirect to it
  function handleOpenLink(link: string) {
    return () => {
      window.open(link, "_blank");
    };
  }

  return (
    <main className="bg-zinc-950 flex min-h-screen flex-col items-center justify-between">
      <div className="grid text-center h-full w-full object-cover lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <div className="relative">
          <Image
            src="/avatar.jpg"
            width={3840}
            height={2160}
            alt=""
            className="object-cover w-full h-full"
          />
          <div
            id="header"
            className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 mt-80"
          >
            <h2 className="text-3xl font-bold">Américo Júnior</h2>
            <p className="">
              Apaixonado por tecnologia, hacking
              <br /> e potencial humano.
            </p>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950"></div>
        </div>

        <div id="social-links" className="flex justify-center">
          <Link href="https://www.instagram.com/americosmjr">
            <Instagram />
          </Link>

          <Link href="https://www.youtube.com/c/americojunior">
            <YouTube />
          </Link>

          <Link href="https://www.twitter.com/americosmjr">
            <Twitter />
          </Link>

          <Link href="https://www.tiktok.com/@americosmjr">
            <TikTok />
          </Link>
        </div>

        <div id="links" className="mx-auto space-y-4 mt-4">
          <div
            onClick={() => window.open('https://americojunior.com')}
            id="link"
            className="border-2 rounded-full p-3 mx-4 bg-transparent hover:bg-gray-950 transition 1s"
          >
            <h3 className="font-medium text-lg">Meu Website</h3>
            <p className="text-xs">
              Saiba mais sobre mim, leia artigos e mais.
            </p>
          </div>

          <div
            onClick={() => window.open('https://newsletter.americojunior.com')}
            id="link"
            className="border-2 rounded-full p-3 mx-4 bg-transparent hover:bg-gray-950 transition 1s"
          >
            <h3 className="font-medium text-lg">Newsletter do Américo</h3>
            <p className="text-xs">
              Insights e experiências sobre hacking, tecnologia e potencial
              humano.
            </p>
          </div>
        </div>

        <div
          id="newsletter"
          className="bg-zinc-900 rounded-3xl mt-8 px-1.5 py-6 space-y-4 mx-4"
        >
          <h2 className="font-bold text-lg">Assine a minha newsletter</h2>
          <p className="text-sm px-2">
            Aqui compartilho insights e experiências sobre hacking, tecnologia e
            potencial humano.
          </p>

          <div id="newsletter-form">
            <form className="flex flex-col px-4" onSubmit={handleSubscribe}>
              <input
                className="p-3 px-4 rounded-full border bg-transparent"
                type="email"
                placeholder="seu@email.com"
              />
              <button
                className="bg-white text-zinc-950 p-3 px-4 my-4 rounded-full"
                type="submit"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>

        <div
          id="products"
          className="mx-auto space-y-4 mt-8 mb-8 flex flex-col"
        >
          <h2 className="text-lg font-bold">Adquira meus produtos</h2>
          <div id="product" className="flex bg-zinc-900 mx-4 rounded-lg">
            <div id="image" className="flex justify-center items-center">
              <Image
                src="/hackeando-a-produtividade.webp"
                width={200}
                height={200}
                alt=""
                className="rounded-l-lg"
              />
            </div>
            <div id="content" className="justify-start text-left px-4 py-3">
              <h3 id="title" className="font-bold">
                Hackeando a Produtividade
              </h3>

              <p id="price" className="text-lg my-2">
                0 US$
              </p>

              <button onClick={() => window.open('https://americojunior.gumroad.com/l/hackeando-a-produtividade')} className="bg-white text-zinc-950 font-bold rounded-full p-1 px-8 hover:bg-gray-950 transition 1s">
                Baixar agora
              </button>
            </div>
          </div>

          <div id="product" className="flex bg-zinc-900 mx-4 rounded-lg">
            <div id="image" className="flex justify-center items-center">
              <Image
                src="/superprodutivo.png"
                width={168}
                height={160}
                alt=""
                className="rounded-l-lg"
              />
            </div>
            <div id="content" className="justify-start text-left px-4 py-3">
              <h3 id="title" className="font-bold">
                Superprodutivo (PACK)
              </h3>

              <p id="price" className="text-lg my-2">
                16 US$
              </p>

              <button onClick={() => window.open('https://americojunior.gumroad.com/l/superprodutivo')} className="bg-white text-zinc-950 font-bold rounded-full p-1 px-5 hover:bg-gray-950 transition 1s">
                Comprar agora
              </button>
            </div>
          </div>
        </div>

        <div id="footer" className="flex justify-center items-center mt-8 mb-8">
          <Image src="/logo.png" width={50} height={50} alt="" />
        </div>
      </div>
    </main>
  );
}
