<script lang="ts">
  import { TextAnimate } from "$lib/components/magic-ui/text-animate";
  import { motion } from "motion-sv";
  let rotate = $state(0);

  const handleRotate = () => {
    rotate = rotate + 90;
  };
  let show = $state(false);
  let toggleShow = () => {
    show = !show;
  };
</script>

<div class="flex justify-center items-center min-h-screen">
  <div class="min-w-xl border rounded-xl min-h-90 p-5">
    <!-- <motion.div
      animate={{ rotate: rotate }}
      transition={{ type: "spring", damping: 10, stiffness: 100 }}
      class="size-40 rounded-xl bg-amber-200"
    ></motion.div>
    <button onclick={handleRotate} class="mt-5">Rotate</button> -->

    <button onclick={toggleShow} class="mt-5">Toggle</button>
    {#if show}
      <div class="mt-4">
        <TextAnimate animation="blurInUp" by="character" content="Coding is fun"
        ></TextAnimate>
        <TextAnimate
          delay={0.5}
          animation="blurInUp"
          by="line"
          content="Coding is fun \n Coding is fun"
        ></TextAnimate>
        <TextAnimate
          delay={1}
          animation="slideUp"
          by="word"
          content="Coding is fun"
        ></TextAnimate>

        <TextAnimate
          delay={2}
          content="Slide left by characters"
          animation="slideLeft"
          by="character"
        ></TextAnimate>

        <TextAnimate
          delay={2.5}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
            },
            show: (i) => ({
              opacity: 1,
              y: 0,
              rotate: 0,
              scale: 1,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
                y: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.8,
                },
                rotate: {
                  type: "spring",
                  damping: 8,
                  stiffness: 150,
                },
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 300,
                },
              },
            }),
            exit: (i) => ({
              opacity: 0,
              y: 30,
              rotate: 45,
              scale: 0.5,
              transition: {
                delay: i * 0.1,
                duration: 0.4,
              },
            }),
          }}
          by="character"
          content="Wavy Motion!"
        ></TextAnimate>
      </div>
    {/if}
  </div>
</div>
