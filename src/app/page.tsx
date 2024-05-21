"use client";
import {
  useMantineColorScheme,
  Container,
  Text,
  Button,
  Group,
  Center,
} from "@mantine/core";
import classes from "./page.module.css";
export default function Home() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  return (
    <Center h={500}>
      <div className={classes.wrapper}>
        <Container size={700} className={classes.inner}>
          <h1 className={classes.title}>
            A{" "}
            <Text
              component="span"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              inherit
            >
              fully featured
            </Text>{" "}
            React components and hooks library
          </h1>

          <Text className={classes.description} color="dimmed">
            Build fully functional accessible web applications with ease –
            Mantine includes more than 100 customizable components and hooks to
            cover you in any situation
          </Text>

          <Group className={classes.controls}>
            <Button
              size="xl"
              className={classes.control}
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
            >
              Get started
            </Button>
          </Group>
          <Group justify="center" mt={50}>
            <Button onClick={() => setColorScheme("light")}>Light</Button>
            <Button onClick={() => setColorScheme("dark")}>Dark</Button>
            <Button onClick={() => setColorScheme("auto")}>Auto</Button>
            <Button onClick={clearColorScheme}>Clear</Button>
          </Group>
        </Container>
      </div>
    </Center>
  );
}
