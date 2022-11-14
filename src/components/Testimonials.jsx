import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>
}

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      maxW={'2xl'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      {children}
    </Stack>
  )
}

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  )
}

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}
    >
      {children}
    </Text>
  )
}

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} size="lg" />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')} id="testimonials">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={'center'}>
            <Heading>Your clients speak</Heading>
            <Text>
              Expose your clients testimonials to build your authority
            </Text>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 10, md: 4, lg: 10 }}
          >
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                  Our objective is to provide intuitive design for your website.
                  When you start to build a website with our theme, it will be
                  easier to make decisions and to create a beautiful website in
                  your desired design. We offer you a professional development
                  service.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://media-exp1.licdn.com/dms/image/D4E03AQE6PHJp8r9TlQ/profile-displayphoto-shrink_200_200/0/1666014132570?e=1672876800&v=beta&t=ndHnM255Kxps7K_ipybUq_b0BeNLkPppU5r3bIplP60'
                }
                name={'Rafael Longeville'}
                title={'CEO at Devtek Solutions'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>Intuitive Design</TestimonialHeading>
                <TestimonialText>
                  Our objective is to provide intuitive design for your website.
                  When you start to build a website with our theme, it will be
                  easier to make decisions and to create a beautiful website in
                  your desired design. We offer you a professional development
                  service.
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://media.discordapp.net/attachments/887602905513873478/1034395555020939274/image-000.jpg'
                }
                name={'Clément Beudot'}
                title={'CTO at Devtek Solutions'}
              />
            </Testimonial>
            <Testimonial>
              <TestimonialContent>
                <TestimonialHeading>
                  Mindblowing Web Design Service
                </TestimonialHeading>
                <TestimonialText>
                  Our team provides you the best website design service on the
                  market.Whether you are a business or an individual, we work
                  together to create a website that provides the functionality
                  you need. If you have any questions, please contact us today!
                </TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={
                  'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
                }
                name={'Jane Cooper'}
                title={'CEO at ABC Corporation'}
              />
            </Testimonial>
          </Stack>
        </Container>
      </motion.div>
    </Box>
  )
}
