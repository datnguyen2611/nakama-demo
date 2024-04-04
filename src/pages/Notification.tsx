import { Card, Flex, Typography } from "antd";

const Notification = () => {
  const notifiItems = [
    {
      title: "Europe Street beat",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: "Europe Street beat",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
    {
      title: "Europe Street beat",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
      image: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
    },
  ];
  return (
    <div className="w-full pt-3">
      <Flex
        vertical
        gap={10}
      >
        {notifiItems.map((e) => {
          return (
            <Card hoverable>
              <Flex
                justify="flex-start"
                align="flex-start"
              >
                <img
                  alt="avatar"
                  src={e.image}
                  className="h-[200px]"
                />
                <Flex
                  vertical
                  className="p-2"
                  justify="flex-start"
                >
                  <Typography.Title
                    level={3}
                    className="text-left"
                  >
                    {e.title}
                  </Typography.Title>
                  <p className="text-left">{e.description}</p>
                </Flex>
              </Flex>
            </Card>
          );
        })}
      </Flex>
    </div>
  );
};
export default Notification;
