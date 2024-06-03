import { Container, Title, Text, Anchor } from "@mantine/core";

export default function Home() {
  return (
    <Container p="xl" mt={200}>
      <Title mb="md">Welcome to Kenstack Mantine Prisma!</Title>
      <Text>
        This template is crafted using modern technologies to provide a solid
        foundation for your next project. It includes:
      </Text>
      <Text mt="md">
        <strong>
          <Anchor
            href="https://mantine.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mantine UI
          </Anchor>
        </strong>
        : A comprehensive and customizable UI component library.
      </Text>
      <Text>
        <strong>
          <Anchor
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </Anchor>
        </strong>
        : A popular React framework for server-side rendering and static site
        generation.
      </Text>
      <Text>
        <strong>
          <Anchor
            href="https://bun.sh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bun
          </Anchor>
        </strong>
        : A fast and efficient package manager, bundler, and test runner.
      </Text>
      <Text>
        <strong>
          <Anchor
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prisma
          </Anchor>
        </strong>
        : A next-generation ORM for simplified database access and management.
      </Text>
      <Text mt="md">
        Enjoy building your application with Kenstack Mantine Prisma!
      </Text>
    </Container>
  );
}
